import { allPosts } from "contentlayer/generated";
import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_URL ||
    "https://jnkyngche.dev";

  let siteUrl = baseUrl.startsWith("http") ? baseUrl : `https://${baseUrl}`;

  if (!siteUrl || siteUrl === "https://" || siteUrl === "http://") {
    siteUrl = "https://jnkyngche.dev";
  }

  siteUrl = siteUrl.replace(/\/$/, "");

  // 포스트를 날짜순으로 정렬 (최신순)
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const rssItems = sortedPosts
    .map((post) => {
      const postUrl = post.slug.startsWith("/")
        ? `${siteUrl}${post.slug}`
        : `${siteUrl}/${post.slug}`;

      return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${postUrl}</link>
      <guid>${postUrl}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.description || ""}]]></description>
    </item>`;
    })
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>jnkyngche (zeroth) | 블로그</title>
    <link>${siteUrl}</link>
    <description>주로 웹 개발에 대하여 이야기합니다.</description>
    <language>ko</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed" rel="self" type="application/rss+xml" />
${rssItems}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
