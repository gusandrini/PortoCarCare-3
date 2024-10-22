import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";
import type { Metadata } from "next";
import "./globals.css";
import {Inter} from 'next/font/google'
// import Head from "next/head";

const mainFontFamily = Inter({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-family-main'
});

export const metadata: Metadata = {
  title: "PortoCarCare",
  description: "Nossa solução para diagnósticos veicular mais veloz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={mainFontFamily.variable}>
      <body >
        <Cabecalho />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
