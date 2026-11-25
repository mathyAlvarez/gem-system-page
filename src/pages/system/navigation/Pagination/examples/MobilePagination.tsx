import { Pagination } from "@gem-org/gem-system";
import { paginationLabels, type PaginationTexts } from "./demo.ts";
import "./pagination-demo.css";

type MobilePaginationProps = { texts: PaginationTexts; compact: string; tight: string };

export function MobilePagination({ texts, compact, tight }: MobilePaginationProps) {
  const labels = paginationLabels(texts);

  return (
    <div className="pager-stack">
      <div className="pager-box pager-box--tablet">
        <p className="pager-caption">{compact}</p>
        <Pagination
          {...labels}
          total={1050}
          defaultPage={44}
          defaultPageSize={24}
          pageSizeOptions={[10, 24, 50, 100]}
          navLabel={`${labels.navLabel} 1`}
        />
      </div>
      <div className="pager-box pager-box--phone">
        <p className="pager-caption">{tight}</p>
        <Pagination {...labels} total={5000} defaultPage={128} navLabel={`${labels.navLabel} 2`} />
      </div>
    </div>
  );
}
