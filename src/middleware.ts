import { getToken } from './utils/cookies';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const protectedRoutes = ['/dashboard', '/profile','/leave', '/organization',"/attendence","/organization/profile-edit","/organization/profile"];

  const isProtectedRoute = protectedRoutes.some(route =>
    pathname.startsWith(route)
  );
  const token = await getToken("accessToken");

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/', request.url));
  }



  return NextResponse.next();
}
