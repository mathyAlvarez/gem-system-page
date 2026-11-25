import { Breadcrumbs } from "@gem-org/gem-system";
import { longItems, type BreadcrumbTexts } from "./demo.ts";
import "./breadcrumbs-demo.css";

const configs = [
  { id: "default", maxItems: 3, before: 1, after: 1 },
  { id: "wide", maxItems: 4, before: 1, after: 2 },
] as const;

type CollapsedBreadcrumbsProps = { texts: BreadcrumbTexts };

export function CollapsedBreadcrumbs({ texts }: CollapsedBreadcrumbsProps) {
  const items = longItems(texts);

  return (
    <div className="crumbs-stack">
      {configs.map(({ id, maxItems, before, after }) => (
        <div key={id}>
          <p className="crumbs-caption">
            maxItems={maxItems} itemsBeforeCollapse={before} itemsAfterCollapse={after}
          </p>
          <Breadcrumbs
            items={items}
            maxItems={maxItems}
            itemsBeforeCollapse={before}
            itemsAfterCollapse={after}
            navLabel={`${texts.navLabel} ${id}`}
            overflowLabel={texts.overflowLabel}
          />
        </div>
      ))}
    </div>
  );
}
