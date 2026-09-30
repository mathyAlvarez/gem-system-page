import { Breadcrumbs } from "@gem-org/gem-system";
import { baseItems, type BreadcrumbTexts } from "./demo.ts";
import "./breadcrumbs-demo.css";

const separators = [
  { id: "slash", node: "/" },
  { id: "dot", node: "·" },
  { id: "arrow", node: "→" },
];

type SeparatorBreadcrumbsProps = { texts: BreadcrumbTexts };

export function SeparatorBreadcrumbs({ texts }: SeparatorBreadcrumbsProps) {
  const items = baseItems(texts);

  return (
    <div className="crumbs-stack">
      {separators.map(({ id, node }) => (
        <div key={id}>
          <p className="crumbs-caption">separator="{node}"</p>
          <Breadcrumbs items={items} separator={node} navLabel={`${texts.navLabel} ${id}`} />
        </div>
      ))}
    </div>
  );
}
