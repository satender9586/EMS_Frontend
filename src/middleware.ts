import { getToken } from './utils/cookies';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const protectedRoutes = ['/dashboard', '/profile', '/organization',"/attendence"];

  const isProtectedRoute = protectedRoutes.some(route =>
    pathname.startsWith(route)
  );

  const token = await getToken("accessToken");

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (pathname.startsWith('/about')) {
    
    return NextResponse.rewrite(new URL('/about-2', request.url));
  }

  return NextResponse.next();
}
