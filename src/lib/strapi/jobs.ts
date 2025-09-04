export async function fetchJobs() {
    const url = new URL('/api/jobs', process.env.NEXT_PUBLIC_STRAPI_URL);
  
    const res = await fetch(url.toString());
    if (!res.ok) {
      throw new Error('Strapi fetch failed');
    }
  
    const json = await res.json();
    return json.data;
  }

  export async function fetchJobBySlug(slug: string) {
    const url = new URL('/api/jobs', process.env.NEXT_PUBLIC_STRAPI_URL);
  
    url.search = new URLSearchParams({
      'filters[slug][$eq]': slug,
    }).toString();
  
    const res = await fetch(url.toString());
    if (!res.ok) throw new Error('Strapi fetch failed');
  
    const json = await res.json();
    return json.data[0] || null;
  }
  
  