import type { Metadata } from "next";
import "./globals.css";
import { AnimatedGridBackground } from "@/components/AnimatedGridBackground";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "FormaOps — прикладные ИИ-инструменты для бизнеса",
    template: "%s",
  },
  description: siteConfig.description,
  openGraph: {
    title: "FormaOps — прикладные ИИ-инструменты для бизнеса",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "ru_RU",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <AnimatedGridBackground />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
