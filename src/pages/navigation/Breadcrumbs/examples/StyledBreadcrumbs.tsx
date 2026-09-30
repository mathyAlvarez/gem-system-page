import { Breadcrumbs } from "@gem-org/gem-system";
import { baseItems, type BreadcrumbTexts } from "./demo.ts";
import "./breadcrumbs-overrides.css";

type StyledBreadcrumbsProps = { texts: BreadcrumbTexts };

export function StyledBreadcrumbs({ texts }: StyledBreadcrumbsProps) {
  return <Breadcrumbs className="breadcrumbs-branded" items={baseItems(texts)} navLabel={texts.navLabel} />;
}
