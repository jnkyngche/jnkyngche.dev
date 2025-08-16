import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";

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

const components = {
  Image,
  pre: CodeBlock,
  code: InlineCode,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
