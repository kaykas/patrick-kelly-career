import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Allow API routes and static files through
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const accessCode = request.cookies.get('pk_access');
  const validCode = process.env.SITE_ACCESS_CODE || 'patrick-dev';

  if (accessCode?.value === validCode) {
    return NextResponse.next();
  }

  // Allow gate page itself
  if (pathname === '/') {
    return NextResponse.next();
  }

  // Redirect to gate
  const url = new URL('/', request.url);
  url.searchParams.set('redirect', pathname === '/logout' ? '' : pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: '/:path*',
};
