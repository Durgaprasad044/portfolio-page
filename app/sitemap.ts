import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://docs.google.com/document/d/1HODLoKM_YhoyPj-ceBBudrmNmI9czxhib2zdf5m1Zeo/edit?usp=sharing",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ]
}
