"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { ImageModal } from "./image-modal";

type ClickableImageProps = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  "src" | "alt" | "width" | "height"
> & {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  unoptimized?: boolean;
};

export function ClickableImage({
  src,
  alt,
  width,
  height,
  style,
  className = "",
  unoptimized,
  ...props
}: ClickableImageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!src) {
    return null;
  }

  // Next.js Image가 받을 수 있는 props만 추출
  const imageProps: ImageProps = {
    src,
    alt: alt || "",
    width,
    height,
    style,
    unoptimized,
  };

  return (
    <>
      <span
        className={`relative inline-block cursor-pointer group ${className}`}
        onClick={() => setIsModalOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsModalOpen(true);
          }
        }}
        aria-label="이미지를 클릭하여 전체화면으로 보기"
        style={{ display: "inline-block" }}
      >
        <span style={{ pointerEvents: "none", display: "block" }}>
          <Image {...imageProps} />
        </span>
        <span
          className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded"
          style={{ pointerEvents: "none" }}
        />
      </span>
      <ImageModal
        src={src}
        alt={alt || ""}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
