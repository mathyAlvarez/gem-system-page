import { Link } from "@gem-org/gem-system";
import { WCAG_LINK_PURPOSE, type LinkTexts } from "./demo.ts";
import "./link-demo.css";

type ParagraphLinkProps = { texts: LinkTexts };

export function ParagraphLink({ texts }: ParagraphLinkProps) {
  const { prose } = texts;

  return (
    <p className="link-prose">
      {prose.before}
      <Link href="/foundations/tokens" underline="always">
        {prose.tokens}
      </Link>
      {prose.middle}
      <Link href={WCAG_LINK_PURPOSE} underline="always" externalLabel={texts.externalLabel}>
        {prose.name}
      </Link>
      {prose.after}
    </p>
  );
}
