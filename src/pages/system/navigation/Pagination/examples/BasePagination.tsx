import { Pagination } from "@gem-org/gem-system";
import { paginationLabels, type PaginationTexts } from "./demo.ts";

type BasePaginationProps = { texts: PaginationTexts };

export function BasePagination({ texts }: BasePaginationProps) {
  return <Pagination total={87} {...paginationLabels(texts)} />;
}
