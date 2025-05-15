import "./globals.css";
import { Header } from "@/componentes/header";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Next JS do zero',
  description: 'Aprendendo NEXT JS do zero com Sujeito Programador',
  openGraph: {
    title: "Aprendendo NEXT JS",
    description: "Aprendendo NEXT JS",
    images: ['https://sujeitoprogramador.com/steve.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
