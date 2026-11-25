import { Link, type LinkSize } from "@gem-org/gem-system";
import type { LinkTexts } from "./demo.ts";
import "./link-demo.css";

const sizes: LinkSize[] = ["sm", "md", "lg"];

type SizesLinkProps = { texts: LinkTexts };

export function SizesLink({ texts }: SizesLinkProps) {
  return (
    <div className="link-row">
      {sizes.map((size) => (
        <Link key={size} href="/guide" size={size}>
          {texts.sizes[size]}
        </Link>
      ))}
    </div>
  );
}
