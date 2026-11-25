import { Pagination } from "@gem-org/gem-system";
import { paginationLabels, type PaginationTexts } from "./demo.ts";
import "./pagination-demo.css";

const configs = [
  { siblingCount: 1, boundaryCount: 1 },
  { siblingCount: 2, boundaryCount: 1 },
  { siblingCount: 1, boundaryCount: 2 },
];

type ManyPagesPaginationProps = { texts: PaginationTexts };

export function ManyPagesPagination({ texts }: ManyPagesPaginationProps) {
  const labels = paginationLabels(texts);

  return (
    <div className="pager-stack">
      {configs.map(({ siblingCount, boundaryCount }, index) => (
        <div key={index}>
          <p className="pager-caption">
            siblingCount={`{${siblingCount}}`} boundaryCount={`{${boundaryCount}}`}
          </p>
          <Pagination
            {...labels}
            total={480}
            defaultPage={12}
            siblingCount={siblingCount}
            boundaryCount={boundaryCount}
            showPageSize={false}
            showSummary={false}
            navLabel={`${labels.navLabel} ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
}
