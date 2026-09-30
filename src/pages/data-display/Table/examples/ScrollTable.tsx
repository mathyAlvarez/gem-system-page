import { Table } from "@gem-org/gem-system";
import { INVOICES, type InvoiceCopy, type TableLabels } from "./demo.ts";
import { useInvoiceColumns } from "./invoiceColumns.tsx";
import "./table-demo.css";

type ScrollTableProps = { copy: InvoiceCopy; labels: TableLabels; locale: string };

export function ScrollTable({ copy, labels, locale }: ScrollTableProps) {
  const columns = useInvoiceColumns(copy, locale, { wide: true });

  return (
    <div className="table-demo table-demo--narrow">
      <Table
        {...labels}
        caption={copy.caption}
        data={INVOICES.slice(0, 6)}
        columns={columns}
        getRowId={(row) => row.id}
      />
    </div>
  );
}
