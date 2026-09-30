import { Link } from "@gem-org/gem-system";
import { MDN_ANCHOR, type LinkTexts } from "./demo.ts";
import "./link-demo.css";

type ExternalLinksProps = { texts: LinkTexts };

export function ExternalLinks({ texts }: ExternalLinksProps) {
  return (
    <div className="link-stack">
      <Link href={MDN_ANCHOR} externalLabel={texts.externalLabel}>
        {texts.docs}
      </Link>
      <Link href={MDN_ANCHOR} isExternal={false}>
        {texts.docs}
      </Link>
    </div>
  );
}
