import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  let dbStatus = 'ok';
  try {
    // Quick ping to database
    await prisma.$queryRaw`SELECT 1`;
  } catch (error) {
    dbStatus = 'unreachable';
  }

  return Response.json({
    status: 'ok',
    database: dbStatus,
    timestamp: new Date().toISOString(),
  });
}
