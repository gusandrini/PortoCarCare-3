import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";
import type { Metadata } from "next";
import "./globals.css";


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
    <html lang="en">
      <body>
        <Cabecalho />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
