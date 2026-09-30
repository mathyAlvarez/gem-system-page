import { useState } from "react";
import { Table, type RowSelectionState } from "@gem-org/gem-system";
import { INVOICES, type InvoiceCopy, type TableLabels } from "./demo.ts";
import { useInvoiceColumns } from "./invoiceColumns.tsx";
import "./table-demo.css";

type SelectionTableProps = {
  copy: InvoiceCopy;
  labels: TableLabels;
  locale: string;
  noneSelected: string;
  selected: string;
};

export function SelectionTable({ copy, labels, locale, noneSelected, selected }: SelectionTableProps) {
  const columns = useInvoiceColumns(copy, locale);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const count = Object.keys(rowSelection).length;

  return (
    <div className="table-demo">
      <p className="table-demo__status" aria-live="polite">
        {count === 0 ? noneSelected : selected.replace("{count}", String(count))}
      </p>
      <Table
        {...labels}
        caption={copy.caption}
        data={INVOICES.slice(0, 8)}
        columns={columns}
        getRowId={(row) => row.id}
        enableRowSelection
        isRowSelectable={(row) => row.status !== "paid"}
        rowSelection={rowSelection}
        onRowSelectionChange={setRowSelection}
      />
    </div>
  );
}
