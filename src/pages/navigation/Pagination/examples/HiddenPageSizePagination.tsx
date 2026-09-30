import { Pagination } from "@gem-org/gem-system";
import { paginationLabels, type PaginationTexts } from "./demo.ts";

type HiddenPageSizePaginationProps = { texts: PaginationTexts };

export function HiddenPageSizePagination({ texts }: HiddenPageSizePaginationProps) {
  return <Pagination {...paginationLabels(texts)} total={87} showPageSize={false} />;
}
