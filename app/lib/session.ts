import 'server-only';

import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const secretKey = process.env.JWT_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export const createSession = async (token: string) => {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  cookies().set('session', token, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  });
};

export const decrypt = async (session: string | undefined = '') => {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch (error) {
    console.log('Failed to verify session');
  }
};
