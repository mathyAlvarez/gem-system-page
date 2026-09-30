import { Link } from "@gem-org/gem-system";
import type { LinkTexts } from "./demo.ts";
import "./link-overrides.css";

type StyledLinkProps = { texts: LinkTexts };

export function StyledLink({ texts }: StyledLinkProps) {
  return (
    <Link href="/guide" className="link-branded">
      {texts.guide}
    </Link>
  );
}
