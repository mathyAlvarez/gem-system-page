import { Pagination } from "@gem-org/gem-system";
import { paginationLabels, type PaginationTexts } from "./demo.ts";
import "./pagination-overrides.css";

type StyledPaginationProps = { texts: PaginationTexts };

export function StyledPagination({ texts }: StyledPaginationProps) {
  return <Pagination {...paginationLabels(texts)} className="pagination-branded" total={87} />;
}
