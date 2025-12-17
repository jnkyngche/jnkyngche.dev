import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // 사이트 URL 가져오기 (sitemap.ts와 동일한 로직)
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_URL ||
    "https://jnkyngche.dev";

  // URL이 https://로 시작하지 않으면 추가
  let siteUrl = baseUrl.startsWith("http") ? baseUrl : `https://${baseUrl}`;

  // 빈 URL이나 잘못된 URL 방지
  if (!siteUrl || siteUrl === "https://" || siteUrl === "http://") {
    siteUrl = "https://jnkyngche.dev";
  }

  // URL 끝의 슬래시 제거
  siteUrl = siteUrl.replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
