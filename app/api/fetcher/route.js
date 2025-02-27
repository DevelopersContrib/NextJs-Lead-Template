import { NextResponse } from "next/server";
import { ENV_VAR, getEnvVar } from "@/lib/getEnvVar";
import { fetcher } from "@/lib/hooks/useFetcher";

const baseURL = getEnvVar(ENV_VAR.API_URL);

async function handleRequest(req, method) {
  console.log("Full request URL:", `${baseURL}${req.url}`);
  try {
    const { url, payload, config } =
      method === "GET"
        ? {
            url: new URL(req.url, "http://localhost:3000").searchParams.get("url"),
            config: new URL(req.url, "http://localhost:3000").searchParams.get("config"),
          }
        : await req.json();

    if (!url) {
      console.error("Missing 'url' parameter");
      return NextResponse.json({ error: 'Missing "url" parameter' }, { status: 400 });
    }

    console.log("Request to fetcher:", { method, baseURL, url, payload, config });

    const data = await fetcher(
      `${baseURL}${url}`,
      method === "GET" ? undefined : payload,
      method === "GET" && config ? JSON.parse(config) : { ...config, method }
    );

    console.log("Fetcher response data:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error(`Error in ${method} fetcher:`, error);

    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}

export const GET = (req) => handleRequest(req, "GET");
export const POST = (req) => handleRequest(req, "POST");
export const PUT = (req) => handleRequest(req, "PUT");
export const DELETE = (req) => handleRequest(req, "DELETE");
