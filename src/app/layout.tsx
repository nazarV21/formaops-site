import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "@/app/globals.css";
import { AnimatedGridBackground } from "@/components/AnimatedGridBackground";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: "/" },
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
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
