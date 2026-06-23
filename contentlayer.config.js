import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeHighlight from "rehype-highlight";
import rehypePrismPlus from "rehype-prism-plus";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
  },
  computedFields,
}));

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
    published: {
      type: "boolean",
      default: true,
    },
  },
  computedFields: {
    ...computedFields,
    tableOfContents: {
      type: "json",
      resolve: (doc) => {
        try {
          const headings = [];
          const lines = doc.body.raw.split("\n");

          lines.forEach((line, index) => {
            const trimmedLine = line.trim();

            // ## 또는 ###로 시작하는 제목 찾기
            if (
              trimmedLine.startsWith("##") &&
              !trimmedLine.startsWith("###")
            ) {
              const text = trimmedLine.replace(/^##\s*/, "");
              // 한글 ID 생성 시 안전한 문자만 사용
              const id = text
                .toLowerCase()
                .replace(/[^a-z0-9가-힣]+/g, "-")
                .replace(/^-+|-+$/g, ""); // 앞뒤 하이픈 제거
              headings.push({ id, text, level: 2 });
            } else if (trimmedLine.startsWith("###")) {
              const text = trimmedLine.replace(/^###\s*/, "");
              // 한글 ID 생성 시 안전한 문자만 사용
              const id = text
                .toLowerCase()
                .replace(/[^a-z0-9가-힣]+/g, "-")
                .replace(/^-+|-+$/g, ""); // 앞뒤 하이픈 제거
              headings.push({ id, text, level: 3 });
            }
          });

          return headings;
        } catch (error) {
          console.error("tableOfContents 생성 오류:", error);
          return [];
        }
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post, Page],
  mdx: {
    rehypePlugins: [
      rehypeHighlight,
      [rehypePrismPlus, { ignoreMissing: true }],
    ],
    // esbuild 옵션 - 프로덕션 JSX 런타임 사용
    esbuildOptions: (options) => {
      options.jsx = "automatic";
      options.jsxImportSource = "react";
      options.jsxDev = false;  // 개발 모드 JSX 비활성화
      options.minify = false;
      options.target = "es2020";
      return options;
    },
  },
  // 빌드 성공/실패 콜백 수정
  onSuccess: async (importData) => {
    console.log("✅ Contentlayer 빌드 성공");
    // 안전한 접근을 위해 옵셔널 체이닝 사용
    if (importData?.allPosts) {
      console.log(`📝 생성된 포스트: ${importData.allPosts.length}개`);
    }
    if (importData?.allPages) {
      console.log(`📄 생성된 페이지: ${importData.allPages.length}개`);
    }
  },
  onError: (error) => {
    console.error("❌ Contentlayer 빌드 실패:", error);
  },
});
