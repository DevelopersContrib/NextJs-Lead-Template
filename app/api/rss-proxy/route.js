import { NextResponse } from "next/server";
import { XMLParser } from "fast-xml-parser";

export async function GET() {
  const rssUrl = "https://appagentdao.vercel.app/api/rss";

  try {
    const response = await fetch(rssUrl);
    const xml = await response.text();

    const parser = new XMLParser();
    const json = parser.parse(xml);

    return NextResponse.json(json);
  } catch (error) {
    console.error("RSS Proxy Error:", error);
    return NextResponse.json({ message: "Failed to fetch RSS" }, { status: 500 });
  }
}
