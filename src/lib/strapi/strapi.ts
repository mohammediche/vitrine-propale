export async function fetchArticles() {
    const url = new URL('/api/articles', process.env.NEXT_PUBLIC_STRAPI_URL);
    // url.search = 'fields=populate[author][fields]=name,email&populate[category][fields]=name&populate[blocks][populate]=*';
    url.search = new URLSearchParams({
        'populate[author][fields]': 'name,email',
        'populate[category][fields]': 'name',
      }).toString();
  
    const res = await fetch(url.toString());
    if (!res.ok) throw new Error('Strapi fetch failed');
    const json = await res.json();
    return json.data;
  }

export async function fetchArticleBySlug(slug: string) {
  const url = new URL('/api/articles', process.env.NEXT_PUBLIC_STRAPI_URL);
url.search = new URLSearchParams({
    'filters[slug][$eq]': slug,
    'populate[author][fields]': 'name,email',
    'populate[category][fields]': 'name',
  }).toString();

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error('Strapi fetch failed');

  const json = await res.json();
  return json.data[0]; // Strapi retourne un array même si un seul article
}