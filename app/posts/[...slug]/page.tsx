import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";
import ScrollToTop from "@/components/scroll-to-top";

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  if (!slug) {
    return undefined;
  }

  // URL이 이미 디코딩되어 있을 수 있으므로, 디코딩 시도
  let decodedSlug: string;
  try {
    decodedSlug = decodeURIComponent(slug);
  } catch {
    decodedSlug = slug;
  }

  // 정확한 매칭 시도
  let post = allPosts.find((post) => post.slugAsParams === decodedSlug);
  
  // 매칭 실패 시 인코딩된 버전도 시도
  if (!post) {
    const encodedSlug = encodeURIComponent(decodedSlug);
    post = allPosts.find((post) => {
      const encodedPostSlug = encodeURIComponent(post.slugAsParams);
      return encodedPostSlug === encodedSlug || post.slugAsParams === decodedSlug;
    });
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<Array<{ slug: string[] }>> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <article className="w-full prose dark:prose-invert">
        {/* 헤더 섹션 */}
        <h1 className="mb-2 mt-8">{post.title}</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 mb-0 text-right">
          {formatDate(post.date)}
        </p>
        <hr className="my-4" />

        {/* 메인 콘텐츠 */}
        <Mdx code={post.body.code} />
      </article>

      {/* 상단으로 이동 버튼 */}
      <ScrollToTop />
    </>
  );
}
