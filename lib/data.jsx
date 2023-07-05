import axios from "axios";
import { headers } from "next/headers";

let DOMAIN = process.env.NEXT_PUBLIC_VERCEL_URL;

export function getDomain() {
  const headersList = headers();
  const referrer = headersList.get("host");
  const domainName = referrer.includes("localhost")
    ? DOMAIN
    : referrer.replace("www.", "");
  return domainName;
}

export async function getData() {
  const url = `https://api1.contrib.co/v2/domains/getdomainconfig?key=5c1bde69a9e783c7edc2e603d8b25023&domain=${DOMAIN}`;
  const res = await fetch(url);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getTopsites() {
  const url = `https://api1.contrib.co/v2/domains/getTopsites?key=5c1bde69a9e783c7edc2e603d8b25023&domain=${DOMAIN}`;
  const res = await fetch(url);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getScript(url) {
  try {
    const res = await axios.get(url);
    return res.data.data.content;
  } catch (e) {
    console.log("error getScript", e);
    return { error: "error getScript" };
  }
}
