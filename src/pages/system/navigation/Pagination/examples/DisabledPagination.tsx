import { Pagination } from "@gem-org/gem-system";
import { paginationLabels, type PaginationTexts } from "./demo.ts";

type DisabledPaginationProps = { texts: PaginationTexts };

export function DisabledPagination({ texts }: DisabledPaginationProps) {
  return <Pagination {...paginationLabels(texts)} total={87} isDisabled />;
}
