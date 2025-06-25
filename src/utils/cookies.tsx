'use server'
import { cookies } from 'next/headers'
 
export async function setCookies(key:string, value:string) {
  const cookieStore = await cookies()
  cookieStore.set(key, value, {
    httpOnly: true,
    // secure: process.env.NODE_ENV === 'production',
    // sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24, 
  });
}

export async function getCookies(key:string) {
    const cookieStore = await cookies()
    const token = await cookieStore.get(key)?.value
    return token
}

export async function clearCookies(key:string){
  const clearCookie =  await cookies()
  return clearCookie.delete(key)
}