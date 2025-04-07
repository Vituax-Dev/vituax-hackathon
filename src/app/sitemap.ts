import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vituax.com";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      alternates: {
        languages: {
          ["pt-BR"]: baseUrl + "/pt",
          en: baseUrl + "/en",
          es: baseUrl + "/es",
        },
      },
    },
  ];
}
