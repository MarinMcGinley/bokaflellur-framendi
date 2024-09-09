'use server';

export const tFetch = async <T>(
  url: string,
  options: RequestInit
): Promise<T> => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`);
  }
  return response.json();
};
