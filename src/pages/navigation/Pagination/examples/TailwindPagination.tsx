import { Pagination, type PaginationProps } from "@gem-org/gem-system";
import { cn } from "@/lib/cn";
import { paginationLabels, type PaginationTexts } from "./demo.ts";

function RoundedPagination({ className, classNames, ...props }: PaginationProps) {
  return (
    <Pagination
      className={cn("[--gem-pagination-hover:var(--gem-color-bg-subtle)]", className)}
      classNames={{
        ...classNames,
        list: cn("rounded-full shadow-sm", classNames?.list),
        summary: cn("font-mono text-xs uppercase tracking-wider", classNames?.summary),
      }}
      {...props}
    />
  );
}

type TailwindPaginationProps = { texts: PaginationTexts };

export function TailwindPagination({ texts }: TailwindPaginationProps) {
  return <RoundedPagination {...paginationLabels(texts)} total={87} showPageSize={false} />;
}
