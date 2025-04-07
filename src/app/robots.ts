import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://vituax.com";
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/en", "/es", "/pt"],
      disallow: [],
    },
    sitemap: baseUrl + "/sitemap.xml",
  };
}
