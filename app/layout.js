import './globals.css'

export const metadata = {
  title: 'Jenoliya Sunilkumar — Full Stack Developer',
  description: 'Portfolio of Jenoliya Sunilkumar — Full Stack Developer specialising in FastAPI, Django, React, and Next.js. Based in Coimbatore, India.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-paper text-ink font-body antialiased">
        {children}
      </body>
    </html>
  )
}
