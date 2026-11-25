import { Breadcrumbs, type BreadcrumbsSize } from "@gem-org/gem-system";
import { baseItems, type BreadcrumbTexts } from "./demo.ts";
import "./breadcrumbs-demo.css";

const sizes: BreadcrumbsSize[] = ["sm", "md", "lg"];

type SizesBreadcrumbsProps = { texts: BreadcrumbTexts };

export function SizesBreadcrumbs({ texts }: SizesBreadcrumbsProps) {
  const items = baseItems(texts);

  return (
    <div className="crumbs-stack">
      {sizes.map((size) => (
        <div key={size}>
          <p className="crumbs-caption">size="{size}"</p>
          <Breadcrumbs items={items} size={size} navLabel={`${texts.navLabel} ${size}`} />
        </div>
      ))}
    </div>
  );
}
