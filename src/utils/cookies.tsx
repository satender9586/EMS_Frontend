'use server'

import { cookies } from 'next/headers'
 
export async function setToken(token:string) {
  const cookieStore = await cookies()
  cookieStore.set('authToken', token, {
    httpOnly: true,
    // secure: process.env.NODE_ENV === 'production',
    // sameSite: 'lax',
    // path: '/',
    maxAge: 60 * 60 * 24, 
  });
}

export async function getAuthToken(key:string) {
    const cookieStore = await cookies()
    const token = await cookieStore.get(key)?.value
    return token
}