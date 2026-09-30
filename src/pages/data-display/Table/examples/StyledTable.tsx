import { Table } from "@gem-org/gem-system";
import { INVOICES, type InvoiceCopy, type TableLabels } from "./demo.ts";
import { useInvoiceColumns } from "./invoiceColumns.tsx";
import "./table-demo.css";
import "./table-overrides.css";

type StyledTableProps = { copy: InvoiceCopy; labels: TableLabels; locale: string };

export function StyledTable({ copy, labels, locale }: StyledTableProps) {
  const columns = useInvoiceColumns(copy, locale);

  return (
    <div className="table-demo">
      <Table
        {...labels}
        className="table-branded"
        radius="lg"
        caption={copy.caption}
        data={INVOICES.slice(0, 5)}
        columns={columns}
        getRowId={(row) => row.id}
        enableRowSelection
        defaultRowSelection={{ "2": true }}
      />
    </div>
  );
}
