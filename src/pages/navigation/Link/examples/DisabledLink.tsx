import { Link } from "@gem-org/gem-system";
import type { LinkTexts } from "./demo.ts";

type DisabledLinkProps = { texts: LinkTexts };

export function DisabledLink({ texts }: DisabledLinkProps) {
  return (
    <Link href="/guide" isDisabled>
      {texts.unavailable}
    </Link>
  );
}
