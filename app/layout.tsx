import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getData } from '../lib/data';


export async function generateMetadata({ params, searchParams }, parent) {
	const c = await getData();
	
	return {
		title: c.data.title,
		description: c.data.description,
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
