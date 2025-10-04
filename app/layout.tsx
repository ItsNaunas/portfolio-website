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
  icons: {
    icon: [
      { url: "/logos/logo.png", sizes: "any" },
    ],
    shortcut: "/logos/logo.png",
    apple: "/logos/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivoBlack.variable}`}>
      <head>
        <link rel="icon" href="/logos/logo.png" type="image/png" />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}

