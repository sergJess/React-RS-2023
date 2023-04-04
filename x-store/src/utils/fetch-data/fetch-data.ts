export async function fetchData<TResponse>(
  url: string,
  options?: unknown
): Promise<TResponse | null> {
  try {
    const response = options ? await fetch(url, options) : await fetch(url);
    if (!response.ok) {
      throw new Error(`something went wrong with fetching from ${url}`);
    }
    return await response.json();
  } catch (error) {
    return null;
  }
}
