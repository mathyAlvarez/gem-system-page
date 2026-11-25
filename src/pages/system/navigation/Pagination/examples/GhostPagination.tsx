import { Pagination, type PaginationVariant } from "@gem-org/gem-system";
import { paginationLabels, type PaginationTexts } from "./demo.ts";
import "./pagination-demo.css";

const variants: PaginationVariant[] = ["outlined", "ghost"];

type GhostPaginationProps = { texts: PaginationTexts };

export function GhostPagination({ texts }: GhostPaginationProps) {
  const labels = paginationLabels(texts);

  return (
    <div className="pager-stack">
      {variants.map((variant) => (
        <div key={variant}>
          <p className="pager-caption">variant="{variant}"</p>
          <Pagination
            {...labels}
            total={87}
            variant={variant}
            navLabel={`${labels.navLabel} ${variant}`}
          />
        </div>
      ))}
    </div>
  );
}
