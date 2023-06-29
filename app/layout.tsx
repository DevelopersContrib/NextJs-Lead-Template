import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export const metadata = {
  title: 'Welcome to Repologic.com',
  description: 'repologic.com',
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
