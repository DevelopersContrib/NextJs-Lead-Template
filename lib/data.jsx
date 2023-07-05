<<<<<<< HEAD
import { headers } from 'next/headers'
let DOMAIN = process.env.NEXT_PUBLIC_VERCEL_URL;

export function getDomain() {
  const headersList = headers()
  const referrer = headersList.get('host')
  const domainName = referrer.includes("localhost") ? DOMAIN : referrer
  return domainName 
=======
import axios from "axios";

const domain = process.env.NEXT_PUBLIC_VERCEL_URL;

export function getHost() {
  var os = require("os");
  //console.log('os',os)
  var hostname = os.hostname();

  return hostname;
}

export async function getHost2() {
  const url = `https://tools.contrib.com/site/gethost`;
  const res = await fetch(url);
  console.log("res", res);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export function getDomain() {
  //return process.env.NEXT_PUBLIC_VERCEL_URL==='localhost:3000'?'javapoint.com':process.env.NEXT_PUBLIC_VERCEL_URL;
  return process.env.VERCEL_URL || process.env.NEXT_PUBLIC_VERCEL_URL;
>>>>>>> ce795efb53d992cbda53ebe1cd893cd37ca5e13e
}

export async function getData() {
  const url = `https://api1.contrib.co/v2/domains/getdomainconfig?key=5c1bde69a9e783c7edc2e603d8b25023&domain=${domain}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getTopsites() {
  const url = `https://api1.contrib.co/v2/domains/getTopsites?key=5c1bde69a9e783c7edc2e603d8b25023&domain=${domain}`;
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
    return res.data;
  } catch (e) {
    console.log("error getScript", e);
    return { error: "error getScript" };
  }
}
