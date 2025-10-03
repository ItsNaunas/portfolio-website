import type { Metadata } from "next";
import { Archivo_Black } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Naunas — Websites & Systems That Convert",
  description: "CRO-focused websites, AI automations, and marketing campaigns that turn clicks into clients. 7-day delivery. 25+ projects completed.",
  keywords: ["conversion optimization", "web design", "CRO", "AI automation", "marketing"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivoBlack.variable}`}>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}

