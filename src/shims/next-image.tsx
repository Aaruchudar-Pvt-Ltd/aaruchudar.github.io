import type { CSSProperties, ImgHTMLAttributes } from "react";
import { asset } from "@/lib/asset";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: string;
  blurDataURL?: string;
  unoptimized?: boolean;
};

export default function Image({
  fill,
  priority: _priority,
  sizes: _sizes,
  quality: _quality,
  placeholder: _placeholder,
  blurDataURL: _blurDataURL,
  unoptimized: _unoptimized,
  className,
  style,
  alt = "",
  ...rest
}: Props) {
  const mergedStyle: CSSProperties | undefined = fill
    ? {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        ...style,
      }
    : style;

  const src = typeof rest.src === "string" ? asset(rest.src) : rest.src;
  return <img alt={alt} className={className} style={mergedStyle} {...rest} src={src} />;
}
