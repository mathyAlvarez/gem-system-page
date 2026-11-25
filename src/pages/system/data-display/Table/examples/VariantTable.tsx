import { Table, type TableProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { INVOICES, type InvoiceCopy, type TableLabels } from "./demo.ts";
import { useInvoiceColumns } from "./invoiceColumns.tsx";
import "./table-demo.css";

const tableVariants = cva("", {
  variants: {
    header: {
      plain: "",
      tinted:
        "[&_.gem-table__th]:bg-(--gem-color-primary-50) [&_.gem-table__th]:text-(--gem-color-primary-800)",
    },
    striped: {
      false: "",
      true: "[&_.gem-table__row:nth-child(even)>td]:bg-(--gem-color-neutral-50)",
    },
  },
  defaultVariants: { header: "plain", striped: false },
});

type DataTableProps<TData extends object> = TableProps<TData> & VariantProps<typeof tableVariants>;

export function DataTable<TData extends object>({
  header,
  striped,
  className,
  ...props
}: DataTableProps<TData>) {
  return <Table className={cn(tableVariants({ header, striped }), className)} {...props} />;
}

type VariantTableProps = { copy: InvoiceCopy; labels: TableLabels; locale: string };

export function VariantTable({ copy, labels, locale }: VariantTableProps) {
  const columns = useInvoiceColumns(copy, locale);

  return (
    <div className="table-demo">
      <DataTable
        {...labels}
        header="tinted"
        striped
        caption={copy.caption}
        data={INVOICES.slice(0, 6)}
        columns={columns}
        getRowId={(row) => row.id}
      />
    </div>
  );
}
