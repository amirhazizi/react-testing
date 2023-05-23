import "./globals.css"

export const metadata = {
  title: "React Testing",
  description: "Simple React app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
