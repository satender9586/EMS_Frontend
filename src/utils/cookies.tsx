'use server'

import { cookies } from 'next/headers'
 
export async function setToken(key:string, token:string) {
  const cookieStore = await cookies()
  cookieStore.set(key, token, {
    httpOnly: true,
    // secure: process.env.NODE_ENV === 'production',
    // sameSite: 'lax',
    // path: '/',
    maxAge: 60 * 60 * 24, 
  });
}

export async function getToken(key:string) {
    const cookieStore = await cookies()
    const token = await cookieStore.get(key)?.value
    return token
}

export async function deleteToken(key:string){
  const clearCookie =  await cookies()
  return clearCookie.delete(key)
}