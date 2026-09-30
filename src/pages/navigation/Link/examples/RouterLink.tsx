import type { MouseEvent } from "react";
import { Link, type LinkProps } from "@gem-org/gem-system";
import { useNavigate } from "react-router-dom";

export function AppLink({ href, onClick, ...props }: LinkProps) {
  const navigate = useNavigate();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    const newTab = event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0;
    if (event.defaultPrevented || newTab || props.target === "_blank") return;
    event.preventDefault();
    navigate(href);
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}

type RouterLinkProps = { label: string };

export function RouterLink({ label }: RouterLinkProps) {
  return <AppLink href="/navigation/link/api">{label}</AppLink>;
}
