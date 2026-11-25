import { Table } from "@gem-org/gem-system";
import { INVOICES, type InvoiceCopy, type TableLabels } from "./demo.ts";
import { useInvoiceColumns } from "./invoiceColumns.tsx";
import "./table-demo.css";

type StickyHeaderTableProps = { copy: InvoiceCopy; labels: TableLabels; locale: string };

export function StickyHeaderTable({ copy, labels, locale }: StickyHeaderTableProps) {
  const columns = useInvoiceColumns(copy, locale);

  return (
    <div className="table-demo">
      <Table
        {...labels}
        caption={copy.caption}
        data={INVOICES}
        columns={columns}
        getRowId={(row) => row.id}
        stickyHeader
        maxHeight={280}
      />
    </div>
  );
}
