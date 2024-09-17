import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Consullab",
  description: "Empresa de Consultoria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" >
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html >
  );
}
