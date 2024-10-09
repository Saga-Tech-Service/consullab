import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { Cormorant_Garamond, Inter, Montserrat } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";




const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorantGaramond',
  weight: ['700']
})


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: "Consullab",
  description: "Empresa de Consultoria",
};

const locales: string[] = ["en", "pt"];

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale} className={`${inter.variable} ${cormorantGaramond.variable} ${montserrat.variable}`}>
      <body className={'bg-[#f4f4f4] antialiased'}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
