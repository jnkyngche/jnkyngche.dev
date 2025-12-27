"use client";

// 클라이언트에서 process 객체 polyfill (최상단에서 먼저 실행)
if (typeof window !== "undefined") {
  const global = globalThis as any;
  if (!global.process) {
    const nodeEnv =
      (typeof process !== "undefined" && process.env?.NODE_ENV) ||
      "development";
    global.process = {
      env: {
        NODE_ENV: nodeEnv,
      },
      browser: true,
      version: "",
    };
  }
  // window.process도 설정
  if (!(window as any).process) {
    (window as any).process = global.process;
  }
}

import { useState } from "react";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import { ClickableImage } from "./clickable-image";
import { ImageModal } from "./image-modal";

// img 태그용 래퍼 (일반 HTML img를 클릭 가능하게)
const ClickableImg = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!props.src) {
    return <img {...props} />;
  }

  return (
    <>
      <img
        {...props}
        onClick={() => setIsModalOpen(true)}
        style={{ ...props.style, cursor: "pointer" }}
        className={`${
          props.className || ""
        } hover:opacity-90 transition-opacity`}
      />
      <ImageModal
        src={props.src}
        alt={props.alt || ""}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

// 코드 블록을 위한 커스텀 컴포넌트
const CodeBlock = ({ children, className, ...props }: any) => {
  const language = className?.replace("language-", "") || "text";

  return (
    <pre className={`language-${language} ${className || ""}`} {...props}>
      <code className={className} {...props}>
        {children}
      </code>
    </pre>
  );
};

// 인라인 코드를 위한 컴포넌트
const InlineCode = ({ children, ...props }: any) => {
  return (
    <code className="inline-code" {...props}>
      {children}
    </code>
  );
};

// 제목 컴포넌트들
const Heading2 = ({ children, ...props }: any) => {
  const text = children?.toString() || "";
  const id = text.toLowerCase().replace(/[^a-z0-9가-힣]+/g, "-");

  return (
    <h2 id={id} {...props}>
      {children}
    </h2>
  );
};

const Heading3 = ({ children, ...props }: any) => {
  const text = children?.toString() || "";
  const id = text.toLowerCase().replace(/[^a-z0-9가-힣]+/g, "-");

  return (
    <h3 id={id} {...props}>
      {children}
    </h3>
  );
};

const components = {
  Image: ClickableImage,
  img: ClickableImg,
  pre: CodeBlock,
  code: InlineCode,
  h2: Heading2,
  h3: Heading3,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
