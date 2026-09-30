import { useMemo, useState } from "react";
import { Pagination, Table } from "@gem-org/gem-system";
import { INVOICES, type InvoiceCopy, type TableLabels } from "./demo.ts";
import { useInvoiceColumns } from "./invoiceColumns.tsx";
import "./table-demo.css";

type PaginationLabels = {
  navLabel: string;
  pageSizeLabel: string;
  previousLabel: string;
  nextLabel: string;
  firstLabel: string;
  lastLabel: string;
};

type PaginationTableProps = {
  copy: InvoiceCopy;
  labels: TableLabels;
  locale: string;
  pagination: PaginationLabels;
  pageLabel: string;
};

export function PaginationTable({ copy, labels, locale, pagination, pageLabel }: PaginationTableProps) {
  const columns = useInvoiceColumns(copy, locale);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const slice = useMemo(() => INVOICES.slice((page - 1) * pageSize, page * pageSize), [page, pageSize]);

  return (
    <div className="table-demo">
      <Table
        {...labels}
        caption={copy.caption}
        data={slice}
        columns={columns}
        getRowId={(row) => row.id}
        enableRowSelection
        footer={
          <Pagination
            {...pagination}
            total={INVOICES.length}
            page={page}
            pageSize={pageSize}
            onPageChange={setPage}
            onPageSizeChange={(next) => {
              setPageSize(next);
              setPage(1);
            }}
            pageLabel={(value) => pageLabel.replace("{page}", String(value))}
            size="sm"
          />
        }
      />
    </div>
  );
}
