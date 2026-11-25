import { Table } from "@gem-org/gem-system";
import { INVOICES, TABLE_SIZES, type InvoiceCopy, type TableLabels } from "./demo.ts";
import { useInvoiceColumns } from "./invoiceColumns.tsx";
import "./table-demo.css";

type SizesTableProps = { copy: InvoiceCopy; labels: TableLabels; locale: string };

export function SizesTable({ copy, labels, locale }: SizesTableProps) {
  const columns = useInvoiceColumns(copy, locale);

  return (
    <div className="table-demo">
      {TABLE_SIZES.map((size) => (
        <Table
          key={size}
          {...labels}
          size={size}
          caption={`size="${size}"`}
          showCaption
          enableSorting={false}
          data={INVOICES.slice(0, 3)}
          columns={columns}
          getRowId={(row) => row.id}
        />
      ))}
    </div>
  );
}
