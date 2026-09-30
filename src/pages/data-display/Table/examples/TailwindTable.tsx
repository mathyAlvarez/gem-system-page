import { Table } from "@gem-org/gem-system";
import { INVOICES, type InvoiceCopy, type TableLabels } from "./demo.ts";
import { useInvoiceColumns } from "./invoiceColumns.tsx";
import "./table-demo.css";

type TailwindTableProps = { copy: InvoiceCopy; labels: TableLabels; locale: string };

export function TailwindTable({ copy, labels, locale }: TailwindTableProps) {
  const columns = useInvoiceColumns(copy, locale);

  return (
    <div className="table-demo">
      <Table
        {...labels}
        caption={copy.caption}
        data={INVOICES.slice(0, 6)}
        columns={columns}
        getRowId={(row) => row.id}
        className="shadow-md"
        classNames={{
          headerCell: "bg-(--gem-color-secondary-50) text-(--gem-color-secondary-800) uppercase text-xs tracking-wide",
          row: "even:[&>td]:bg-(--gem-color-neutral-50)",
          cell: "tabular-nums",
        }}
      />
    </div>
  );
}
