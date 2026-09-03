import { Link as RouterLink } from "react-router-dom";
import type { CSSProperties, MouseEvent, ReactNode } from "react";

type HrefObject = {
  pathname?: string;
  query?: Record<string, string | number | boolean | undefined>;
  hash?: string;
};

type Props = {
  href?: string | HrefObject;
  to?: string;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
  rel?: string;
  prefetch?: boolean;
  replace?: boolean;
  scroll?: boolean;
  role?: string;
  [key: string]: unknown;
};

function hrefToPath(href?: string | HrefObject, to?: string) {
  if (typeof to === "string") return to;
  if (!href) return "/";
  if (typeof href === "string") return href;

  const pathname = href.pathname || "/";
  const params = new URLSearchParams();
  if (href.query) {
    for (const [key, value] of Object.entries(href.query)) {
      if (value !== undefined && value !== null) params.set(key, String(value));
    }
  }
  const search = params.toString();
  const hash = href.hash ? (href.hash.startsWith("#") ? href.hash : `#${href.hash}`) : "";
  return `${pathname}${search ? `?${search}` : ""}${hash}`;
}

export default function Link({
  href,
  to,
  prefetch: _prefetch,
  scroll: _scroll,
  replace,
  ...props
}: Props) {
  return <RouterLink to={hrefToPath(href, to)} replace={replace} {...props} />;
}
