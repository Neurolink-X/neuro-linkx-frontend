import { Inter } from &apos;next/font/google&apos;
import &apos;./globals.css&apos;
import Header from &apos;@/components/header/Header&apos;

const inter = Inter({ subsets: [&apos;latin&apos;] })

export const metadata = {
  title: &apos;Neurolink - Custom Software & Cloud Solutions&apos;,
  description: &apos;Transform your business with custom software development, automation solutions, and cloud infrastructure.&apos;,
}

export default function RootLayout({ children }) {
  return (
    <html lang=&quot;en&quot;>
      <body className={inter.className}>
        <Header />
        <main className=&quot;pt-16&quot;>
          {children}
        </main>
      </body>
    </html>
  )
} 