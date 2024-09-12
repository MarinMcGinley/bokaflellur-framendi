'use server';

import { createSession } from '../lib/session';
import { redirect } from 'next/navigation';
import { User } from '../types/zod';
import { post } from '../lib/fetch';

const baseUrl = process.env.SERVER_URL;

export const logInAction = async (values: {
  email: string;
  password: string;
}) => {
  const response = await post<{
    user: User;
    token: string;
    expiresIn: number;
  }>(`${baseUrl}/login`, values);

  await createSession(response.token);
  redirect('/');
};
