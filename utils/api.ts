export async function safeFetch<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) throw new Error('Something Went Wrong');

    const data = await res.json();
     return data?.data ?? null;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;;
  }
}