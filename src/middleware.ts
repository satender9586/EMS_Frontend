import { getCookies } from './utils/cookies';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;


  const authInfo = await getCookies("auth");
  let role: string | undefined = undefined;

  if (authInfo) {
    try {
      role = JSON.parse(authInfo)?.role;
    } catch (err) {
      console.error("Invalid auth cookie:", err);
    }
  }


  const ROUTES = {
    Super_Admin: [
      '/dashboard', '/profile', '/leave', '/organization',
      '/attendence', '/organization/profile-edit', '/organization/profile'
    ],
    Admin: [
      '/dashboard', '/profile', '/leave', '/organization',
      '/attendence', '/organization/profile-edit', '/organization/profile'
    ],
    Employee: [
      '/attendence', '/profile', '/leave'
    ]
  };

  const protectedRoutes = [...new Set([
    ...ROUTES.Super_Admin,
    ...ROUTES.Admin,
    ...ROUTES.Employee
  ])];



  const isProtectedRoute = protectedRoutes.some(route =>pathname.startsWith(route));


  const token = await getCookies("accessToken");
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

 
  if (role && isProtectedRoute) {
    const allowedRoutes = ROUTES[role as keyof typeof ROUTES] || [];
    const hasAccess = allowedRoutes.some(route =>pathname.startsWith(route));

    if (!hasAccess) {
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }
  }

  return NextResponse.next();
}
