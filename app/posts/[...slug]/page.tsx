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
  const decodedSlug = decodeURIComponent(slug);
  const post = allPosts.find((post) => post.slugAsParams === decodedSlug);

  if (!post) {
    null;
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

export async function generateStaticParams(): Promise<PostProps["params"][]> {
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
        {post.description && (
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-0 mt-0">
            {post.description}
          </p>
        )}
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 mb-0 text-right">
          {formatDate(post.date)}
        </p>
        <hr className="my-4" />

        {/* 메인 콘텐츠와 목차 */}
        <Mdx code={post.body.code} />
      </article>

      {/* 상단으로 이동 버튼 */}
      <ScrollToTop />
    </>
  );
}
