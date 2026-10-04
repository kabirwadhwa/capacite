import { NextResponse, type NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect /admin and /api/admin
  if (pathname.startsWith('/admin') || pathname.startsWith('/api/admin')) {
    const authHeader = request.headers.get('authorization');
    const adminPassword = process.env.ADMIN_PASSWORD || 'coupdepaule2026!';

    if (!authHeader) {
      return new NextResponse('Accès administrateur protégé', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Coup d\'Épaule Admin"',
        },
      });
    }

    try {
      const authValue = authHeader.split(' ')[1];
      const [user, pwd] = Buffer.from(authValue, 'base64').toString().split(':');

      if (user !== 'admin' || pwd !== adminPassword) {
        return new NextResponse('Identifiants administrateur incorrects', {
          status: 401,
          headers: {
            'WWW-Authenticate': 'Basic realm="Coup d\'Épaule Admin"',
          },
        });
      }
    } catch {
      return new NextResponse('Erreur d\'authentification', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Coup d\'Épaule Admin"',
        },
      });
    }
  }

  const response = NextResponse.next();

  // Security Headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
