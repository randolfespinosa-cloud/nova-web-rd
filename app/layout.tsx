import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-heading",
  weight: ["700"] 
})

export const metadata: Metadata = {
  title: "Nova Web RD | Agencia de Desarrollo Web",
  description: "Transformamos tu negocio con sitios web profesionales. Contáctanos en info@novawebrd.com o visita novawebrd.com para conocer nuestros servicios.",
  openGraph: {
    title: "Nova Web RD",
    description: "Expertos en presencia digital y desarrollo de software.",
    url: "https://novawebrd.com",
    siteName: "Nova Web RD",
    locale: "es_DO",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}