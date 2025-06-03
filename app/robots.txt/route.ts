import { getData } from '@/lib/data';
import { NextResponse } from 'next/server';

export async function GET() {
  const c = await getData();
  const domain = c.data.domainName;

  const content = `
User-agent: *
Allow: /

Sitemap: https://${domain}/sitemap.xml
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
