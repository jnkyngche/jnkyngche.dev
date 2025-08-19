import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import { useEffect } from "react";

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
  Image,
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
