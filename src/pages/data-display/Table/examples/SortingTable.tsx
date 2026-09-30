import { useState } from "react";
import { Table, type SortingState } from "@gem-org/gem-system";
import { INVOICES, type InvoiceColumn, type InvoiceCopy, type TableLabels } from "./demo.ts";
import { useInvoiceColumns } from "./invoiceColumns.tsx";
import "./table-demo.css";

type SortingTableProps = { copy: InvoiceCopy; labels: TableLabels; locale: string; sortedBy: string; none: string };

export function SortingTable({ copy, labels, locale, sortedBy, none }: SortingTableProps) {
  const columns = useInvoiceColumns(copy, locale);
  const [sorting, setSorting] = useState<SortingState>([{ id: "customer", desc: false }]);
  const summary = sorting
    .map((item) => `${copy.columns[item.id as InvoiceColumn] ?? item.id} ${item.desc ? "↓" : "↑"}`)
    .join(", ");

  return (
    <div className="table-demo">
      <p className="table-demo__status" aria-live="polite">
        {sortedBy}: {summary || none}
      </p>
      <Table
        {...labels}
        caption={copy.caption}
        data={INVOICES.slice(0, 8)}
        columns={columns}
        getRowId={(row) => row.id}
        sorting={sorting}
        onSortingChange={setSorting}
      />
    </div>
  );
}
