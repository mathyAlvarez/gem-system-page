import { useState } from "react";
import { Button, Pagination } from "@gem-org/gem-system";
import { paginationLabels, type PaginationTexts } from "./demo.ts";
import "./pagination-demo.css";

type ControlledPaginationProps = { texts: PaginationTexts; current: string; goToFirst: string };

export function ControlledPagination({ texts, current, goToFirst }: ControlledPaginationProps) {
  const [page, setPage] = useState(3);

  return (
    <div className="pager-stack">
      <Pagination {...paginationLabels(texts)} total={87} page={page} onPageChange={setPage} />
      <div className="pager-controls">
        <Button size="sm" variant="secondary" onClick={() => setPage(1)}>
          {goToFirst}
        </Button>
        <span>
          {current}: <code>{page}</code>
        </span>
      </div>
    </div>
  );
}
