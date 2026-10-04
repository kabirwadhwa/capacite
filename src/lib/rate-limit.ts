import { prisma } from './prisma';

export function getClientIp(req: Request): string {
  const headers = req.headers;
  const railwayIp = headers.get('x-railway-client-ip');
  if (railwayIp) return railwayIp.trim();

  const realIp = headers.get('x-real-ip');
  if (realIp) return realIp.trim();

  const forwardedFor = headers.get('x-forwarded-for');
  if (forwardedFor) {
    // Leftmost is client, rightmost proxy added hops
    const ips = forwardedFor.split(',').map((ip) => ip.trim());
    return ips[0] || '127.0.0.1';
  }

  return '127.0.0.1';
}

/**
 * Persistent rate limiter in PostgreSQL
 * @param key unique identifier (e.g. `form:${ip}`)
 * @param limit max allowed requests in duration
 * @param durationSeconds time window in seconds
 */
export async function checkRateLimit(
  key: string,
  limit: number = 5,
  durationSeconds: number = 3600
): Promise<{ allowed: boolean; remaining: number; resetAt: Date }> {
  const now = new Date();
  const resetAt = new Date(now.getTime() + durationSeconds * 1000);

  try {
    const existing = await prisma.rateLimit.findUnique({
      where: { key },
    });

    if (!existing || existing.reset_at < now) {
      // Create or reset
      await prisma.rateLimit.upsert({
        where: { key },
        create: {
          key,
          count: 1,
          reset_at: resetAt,
        },
        update: {
          count: 1,
          reset_at: resetAt,
        },
      });
      return { allowed: true, remaining: limit - 1, resetAt };
    }

    if (existing.count >= limit) {
      return { allowed: false, remaining: 0, resetAt: existing.reset_at };
    }

    const updated = await prisma.rateLimit.update({
      where: { key },
      data: { count: { increment: 1 } },
    });

    return {
      allowed: true,
      remaining: Math.max(0, limit - updated.count),
      resetAt: existing.reset_at,
    };
  } catch (error) {
    console.warn('[RateLimit] Database rate limit check failed, allowing request:', error);
    // Graceful fallback if database is not connected during local dev or migrations
    return { allowed: true, remaining: limit - 1, resetAt };
  }
}
