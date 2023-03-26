export async function fetchData<TResponse>(url: string): Promise<TResponse> {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch {
    throw new Error(`Failed to load data from ${url}`);
  }
}
