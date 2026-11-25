import { Breadcrumbs } from "@gem-org/gem-system";
import { longItems, type BreadcrumbTexts } from "./demo.ts";
import "./breadcrumbs-demo.css";

type MobileBreadcrumbsProps = { texts: BreadcrumbTexts; wrapped: string; collapsed: string };

export function MobileBreadcrumbs({ texts, wrapped, collapsed }: MobileBreadcrumbsProps) {
  const items = longItems(texts);

  return (
    <div className="flex w-full flex-wrap gap-5">
      <div className="crumbs-phone">
        <p className="crumbs-caption">{wrapped}</p>
        <Breadcrumbs items={items} size="sm" navLabel={`${texts.navLabel} 1`} />
      </div>
      <div className="crumbs-phone">
        <p className="crumbs-caption">{collapsed}</p>
        <Breadcrumbs
          items={items}
          size="sm"
          maxItems={3}
          navLabel={`${texts.navLabel} 2`}
          overflowLabel={texts.overflowLabel}
        />
      </div>
    </div>
  );
}
