import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
              <body className="bg-black text-white font-serif">
        <main className="max-w-4xl mx-auto px-6 py-16 flex flex-col items-center">{children}</main>
      </body>
    </html>
  )
}
