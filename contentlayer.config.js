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
  },
  computedFields: {
    ...computedFields,
    tableOfContents: {
      type: "json",
      resolve: (doc) => {
        const headings = [];
        const lines = doc.body.raw.split("\n");

        lines.forEach((line, index) => {
          const trimmedLine = line.trim();

          // ## 또는 ###로 시작하는 제목 찾기
          if (trimmedLine.startsWith("##") && !trimmedLine.startsWith("###")) {
            const text = trimmedLine.replace(/^##\s*/, "");
            const id = text.toLowerCase().replace(/[^a-z0-9가-힣]+/g, "-");
            headings.push({ id, text, level: 2 });
          } else if (trimmedLine.startsWith("###")) {
            const text = trimmedLine.replace(/^###\s*/, "");
            const id = text.toLowerCase().replace(/[^a-z0-9가-힣]+/g, "-");
            headings.push({ id, text, level: 3 });
          }
        });

        return headings;
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
  },
});
