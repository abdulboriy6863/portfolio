import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre-franklin",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdulboriy Rakhmatullaev | Full-Stack & AI Automation Engineer",
  description: "Portfolio of Abdulboriy Rakhmatullaev (Jack) - Full-Stack & AI Automation Engineer. Spotlighting n8n automation, LLM integration, NestJS, Next.js, and Express.js solutions.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${libreFranklin.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

