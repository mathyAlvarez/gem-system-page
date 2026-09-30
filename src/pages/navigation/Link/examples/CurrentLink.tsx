import { Link } from "@gem-org/gem-system";
import type { LinkTexts } from "./demo.ts";
import "./link-demo.css";

type CurrentLinkProps = { texts: LinkTexts };

export function CurrentLink({ texts }: CurrentLinkProps) {
  const { nav } = texts;
  const items = [
    { href: "/home", label: nav.home },
    { href: "/overview", label: nav.overview, current: true },
    { href: "/api", label: nav.api },
  ];

  return (
    <div className="link-row">
      {items.map((item) => (
        <Link key={item.href} href={item.href} isCurrent={item.current} underline={item.current ? "none" : "hover"}>
          {item.label}
        </Link>
      ))}
    </div>
  );
}
