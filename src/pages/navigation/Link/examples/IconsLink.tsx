import { Link } from "@gem-org/gem-system";
import { ArrowRight, Download, Home } from "@gem-org/gem-system/icons";
import type { LinkTexts } from "./demo.ts";
import "./link-demo.css";

type IconsLinkProps = { texts: LinkTexts };

export function IconsLink({ texts }: IconsLinkProps) {
  return (
    <div className="link-stack">
      <Link href="/home" leftIcon={<Home size="xs" />}>
        {texts.home}
      </Link>
      <Link href="/checkout" rightIcon={<ArrowRight size="xs" />}>
        {texts.continue}
      </Link>
      <Link href="/reports/summary.pdf" download leftIcon={<Download size="xs" />}>
        {texts.download}
      </Link>
    </div>
  );
}
