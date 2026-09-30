import { Breadcrumbs } from "@gem-org/gem-system";
import { baseItems, type BreadcrumbTexts } from "./demo.ts";

type BaseBreadcrumbsProps = { texts: BreadcrumbTexts };

export function BaseBreadcrumbs({ texts }: BaseBreadcrumbsProps) {
  return <Breadcrumbs items={baseItems(texts)} navLabel={texts.navLabel} />;
}
