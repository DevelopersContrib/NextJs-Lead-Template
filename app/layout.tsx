import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script';
import { getData } from '@/lib/data'
import { Metadata } from 'next';
import First100FoundersModalWrapper from "@/components/First100FoundersModalWrapper";

// Asynchronously generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  const c = await getData();

  return {
    title: c.data.title === '' ? 'Welcome to ' + c.data.domainName : c.data.title,
    description: c.data.description,
    keywords: c.data.keywords?.split(','),
    authors: [{ name: c.data.author }],
    openGraph: {
      title: c.data.title || 'Welcome to ' + c.data.domainName,
      description: c.data.description,
      siteName: c.data.domainName,
      type: 'website',
      locale: 'en_US',
      url: `https://${c.data.domainName}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: c.data.title || 'Welcome to ' + c.data.domainName,
      description: c.data.description,
    },
  };
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <First100FoundersModalWrapper />
      <body>{children}</body>
    </html>
  )
}
