import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/products",
    "/products/sheetnorm",
    "/pilot",
    "/about",
    "/contacts",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency:
      path.includes("privacy") || path.includes("terms") ? "yearly" : "monthly",
    priority: path === "" ? 1 : path.includes("sheetnorm") ? 0.9 : 0.7,
  }));
}
