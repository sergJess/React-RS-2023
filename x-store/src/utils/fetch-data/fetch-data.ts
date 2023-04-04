export async function fetchData<TResponse>(url: string): Promise<TResponse | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`something went wrong with fetching from ${url}`);
    }
    return await response.json();
  } catch (error) {
    return null;
  }
}
