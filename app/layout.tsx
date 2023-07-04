import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getData } from '@/lib/data'


export async function generateMetadata() {
  const c = await getData();

	return {
		title: c.data.title,
		description: c.data.description,
    keywords: c.data.keywords,
    author: c.data.author
	}
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
