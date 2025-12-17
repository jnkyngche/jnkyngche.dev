import { MetadataRoute } from "next";
import { allPosts, allPages } from "contentlayer/generated";

export default function sitemap(): MetadataRoute.Sitemap {
  // 사이트 URL 가져오기 (Vercel에서는 자동으로 제공되거나 환경 변수에서 가져옴)
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

  // URL 끝의 슬래시 제거 (일관성을 위해)
  siteUrl = siteUrl.replace(/\/$/, "");

  // 홈페이지 (trailing slash 포함)
  const routes = [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      // changeFrequency와 priority 제거 (사용자가 원하는 형식)
    },
  ];

  // 모든 포스트 추가 (안전하게 처리)
  // Next.js가 자동으로 URL 인코딩 처리 (한글 등)
  const postRoutes = (allPosts || []).map((post) => {
    // post.slug은 이미 /posts/... 형식이므로 그대로 사용
    const postUrl = post.slug.startsWith("/")
      ? `${siteUrl}${post.slug}`
      : `${siteUrl}/${post.slug}`;
    return {
      url: postUrl,
      lastModified: new Date(post.date),
    };
  });

  // 모든 페이지 추가 (안전하게 처리)
  // 페이지는 slugAsParams를 사용하여 /pages/ 접두사를 제거
  const pageRoutes = (allPages || []).map((page) => {
    const pageUrl = page.slugAsParams.startsWith("/")
      ? `${siteUrl}${page.slugAsParams}`
      : `${siteUrl}/${page.slugAsParams}`;
    return {
      url: pageUrl,
      lastModified: new Date(),
    };
  });

  return [...routes, ...postRoutes, ...pageRoutes] as MetadataRoute.Sitemap;
}
