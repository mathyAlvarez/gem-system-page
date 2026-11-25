import { Badge, Table } from "@gem-org/gem-system";
import { INVOICES, type InvoiceCopy, type TableLabels } from "./demo.ts";
import { useInvoiceColumns } from "./invoiceColumns.tsx";
import "./table-demo.css";

type CaptionTableProps = {
  copy: InvoiceCopy;
  labels: TableLabels;
  locale: string;
  caption: string;
  count: string;
};

export function CaptionTable({ copy, labels, locale, caption, count }: CaptionTableProps) {
  const columns = useInvoiceColumns(copy, locale);
  const data = INVOICES.slice(0, 3);

  return (
    <div className="table-demo">
      <Table
        {...labels}
        caption={copy.caption}
        showCaption
        extra={
          <Badge size="sm" tone="neutral">
            {count.replace("{count}", String(data.length))}
          </Badge>
        }
        data={data}
        columns={columns}
        getRowId={(row) => row.id}
      />
      <Table
        {...labels}
        caption={caption}
        showCaption
        captionSide="bottom"
        enableSorting={false}
        data={data}
        columns={columns}
        getRowId={(row) => row.id}
      />
    </div>
  );
}
