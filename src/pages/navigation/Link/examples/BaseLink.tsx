import { Link } from "@gem-org/gem-system";
import type { LinkTexts } from "./demo.ts";

type BaseLinkProps = { texts: LinkTexts };

export function BaseLink({ texts }: BaseLinkProps) {
  return <Link href="/guide">{texts.guide}</Link>;
}
