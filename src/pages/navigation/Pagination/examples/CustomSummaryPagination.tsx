import { Pagination } from "@gem-org/gem-system";
import { fill, paginationLabels, type PaginationTexts } from "./demo.ts";

type CustomSummaryPaginationProps = { texts: PaginationTexts; summary: string };

export function CustomSummaryPagination({ texts, summary }: CustomSummaryPaginationProps) {
  return (
    <Pagination
      {...paginationLabels(texts)}
      total={87}
      showSummary={(range) => fill(summary, range)}
    />
  );
}
