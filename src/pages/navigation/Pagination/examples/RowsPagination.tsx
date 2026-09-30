import { useState } from "react";
import { Pagination } from "@gem-org/gem-system";
import { invoices, paginationLabels, type PaginationTexts } from "./demo.ts";
import "./pagination-demo.css";

type RowsPaginationProps = { texts: PaginationTexts };

export function RowsPagination({ texts }: RowsPaginationProps) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const items = invoices(texts);
  const start = (page - 1) * pageSize;
  const rows = items.slice(start, start + pageSize);

  return (
    <div className="pager-stack">
      <ul className="pager-list">
        {rows.map((row) => (
          <li key={row.id} className="pager-row">
            <span>{row.name}</span>
            <span className="pager-row__status">{row.status}</span>
          </li>
        ))}
      </ul>
      <Pagination
        {...paginationLabels(texts)}
        total={items.length}
        page={page}
        pageSize={pageSize}
        pageSizeOptions={[5, 10, 25]}
        onPageChange={setPage}
        onPageSizeChange={(next) => {
          setPageSize(next);
          setPage(1);
        }}
      />
    </div>
  );
}
