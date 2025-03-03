import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const headersList = headers();
  const referrer = headersList.get("host");

  const domainName = referrer?.includes("localhost")
    ? process.env.NEXT_PUBLIC_VERCEL_URL
    : referrer?.replace("www.", "");

  return NextResponse.json({ domain: domainName });
}
