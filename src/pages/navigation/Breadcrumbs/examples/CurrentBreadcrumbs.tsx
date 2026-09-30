import { Breadcrumbs } from "@gem-org/gem-system";
import { baseItems, type BreadcrumbTexts } from "./demo.ts";

type CurrentBreadcrumbsProps = { texts: BreadcrumbTexts };

export function CurrentBreadcrumbs({ texts }: CurrentBreadcrumbsProps) {
  const items = baseItems(texts).map((item) => ({ ...item, current: item.id === "docs" }));

  return <Breadcrumbs items={items} navLabel={texts.navLabel} />;
}
