import { useState } from "react";
import { Table, type RowSelectionState } from "@gem-org/gem-system";
import { INVOICES, type InvoiceCopy, type TableLabels } from "./demo.ts";
import { useInvoiceColumns } from "./invoiceColumns.tsx";
import "./table-demo.css";

type RowClickTableProps = {
  copy: InvoiceCopy;
  labels: TableLabels;
  locale: string;
  current: string;
};

export function RowClickTable({ copy, labels, locale, current }: RowClickTableProps) {
  const columns = useInvoiceColumns(copy, locale);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({ "2": true });
  const selectedId = Object.keys(rowSelection)[0];
  const invoice = INVOICES.find((item) => item.id === selectedId);

  return (
    <div className="table-demo">
      <p className="table-demo__status" aria-live="polite">
        {current}: {invoice?.number ?? "—"}
      </p>
      <Table
        {...labels}
        caption={copy.caption}
        data={INVOICES.slice(0, 6)}
        columns={columns}
        getRowId={(row) => row.id}
        enableRowSelection
        enableMultiRowSelection={false}
        selectOnRowClick
        rowSelection={rowSelection}
        onRowSelectionChange={setRowSelection}
      />
    </div>
  );
}
