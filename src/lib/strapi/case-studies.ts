export async function fetchAllCaseStudies() {
  const url = new URL('/api/cas-concrets', process.env.NEXT_PUBLIC_STRAPI_URL);
  // Charger tous les cas d'études sans filtre
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error('Strapi fetch failed');
  const json = await res.json();
  return json.data;
}

export async function fetchCaseStudiesByService(serviceSlug: string) {
  const url = new URL('/api/cas-concrets', process.env.NEXT_PUBLIC_STRAPI_URL);
  url.search = new URLSearchParams({
    'filters[serviceSlug][$eq]': serviceSlug,
  }).toString();

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error('Strapi fetch failed');
  const json = await res.json();
  return json.data;
}

export async function fetchCaseStudyBySlug(slug: string) {
  const url = new URL('/api/cas-concrets', process.env.NEXT_PUBLIC_STRAPI_URL);
  url.search = new URLSearchParams({
    'filters[slug][$eq]': slug,
  }).toString();

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error('Strapi fetch failed');
  const json = await res.json();
  return json.data[0];
}