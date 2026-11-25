import { Link, type LinkUnderline } from "@gem-org/gem-system";
import type { LinkTexts } from "./demo.ts";
import "./link-demo.css";

const underlines: LinkUnderline[] = ["always", "hover", "none"];

type UnderlineLinkProps = { texts: LinkTexts };

export function UnderlineLink({ texts }: UnderlineLinkProps) {
  return (
    <div className="link-stack">
      {underlines.map((underline) => (
        <div key={underline} className="link-stack">
          <p className="link-caption">underline="{underline}"</p>
          <Link href="/guide" underline={underline}>
            {texts.underline[underline]}
          </Link>
        </div>
      ))}
    </div>
  );
}
