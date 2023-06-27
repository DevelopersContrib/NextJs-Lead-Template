let DOMAIN = process.env.NEXT_PUBLIC_VERCEL_URL;

export function getDomain() {
  return DOMAIN
}

export async function getData() {
  const url = `https://api1.contrib.co/v2/domains/getdomainconfig?key=5c1bde69a9e783c7edc2e603d8b25023&domain=${DOMAIN}`
  const res = await fetch(url)
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
}


