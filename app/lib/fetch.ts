'use server';

const tFetch = async <T>(url: string, options: RequestInit): Promise<T> => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`);
  }
  return response.json();
};

export const get = async <T>(url: string, options?: RequestInit): Promise<T> =>
  tFetch<T>(url, { ...options, method: 'GET' });

export const post = async <T>(url: string, body: unknown): Promise<T> =>
  tFetch<T>(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

export const put = async <T>(
  url: string,
  body: unknown,
  options?: RequestInit
): Promise<T> =>
  tFetch<T>(url, {
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

export const del = async <T>(url: string, options?: RequestInit): Promise<T> =>
  tFetch<T>(url, { ...options, method: 'DELETE' });
