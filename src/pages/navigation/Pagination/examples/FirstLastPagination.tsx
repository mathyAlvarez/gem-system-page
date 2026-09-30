import { Pagination } from "@gem-org/gem-system";
import { paginationLabels, type PaginationTexts } from "./demo.ts";
import "./pagination-demo.css";

type FirstLastPaginationProps = { texts: PaginationTexts };

export function FirstLastPagination({ texts }: FirstLastPaginationProps) {
  const labels = paginationLabels(texts);

  return (
    <div className="pager-stack">
      {[true, false].map((showFirstLast) => (
        <div key={String(showFirstLast)}>
          <p className="pager-caption">showFirstLast={`{${showFirstLast}}`}</p>
          <Pagination
            {...labels}
            total={240}
            defaultPage={6}
            showFirstLast={showFirstLast}
            showPageSize={false}
            navLabel={`${labels.navLabel} ${showFirstLast ? 1 : 2}`}
          />
        </div>
      ))}
    </div>
  );
}
