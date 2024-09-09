'use server';

import { createSession } from '../lib/session';
import { redirect } from 'next/navigation';
import { tFetch } from '../lib/fetch';
import { User } from '../types/zod';

const baseUrl = process.env.SERVER_URL;

export const logInAction = async (values: {
  email: string;
  password: string;
}) => {
  const response = await tFetch<{
    user: User;
    token: string;
    expiresIn: number;
  }>(`${baseUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  await createSession(response.token);
  redirect('/');
};
