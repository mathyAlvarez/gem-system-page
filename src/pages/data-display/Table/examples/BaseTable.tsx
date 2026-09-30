import { useMemo } from "react";
import { Badge, Table, createTableColumnHelper } from "@gem-org/gem-system";
import { INVOICES, STATUS_TONE, formatMoney, type Invoice, type InvoiceCopy, type TableLabels } from "./demo.ts";
import "./table-demo.css";

const helper = createTableColumnHelper<Invoice>();

type BaseTableProps = { copy: InvoiceCopy; labels: TableLabels; locale: string };

export function BaseTable({ copy, labels, locale }: BaseTableProps) {
  const columns = useMemo(
    () =>
      helper.columns([
        helper.accessor("number", { header: copy.columns.number, meta: { minWidth: 120 } }),
        helper.accessor("customer", { header: copy.columns.customer, meta: { minWidth: 160 } }),
        helper.accessor("amount", {
          header: copy.columns.amount,
          meta: { align: "end", minWidth: 120 },
          cell: ({ getValue }) => formatMoney(locale, getValue()),
        }),
        helper.accessor("status", {
          header: copy.columns.status,
          cell: ({ getValue }) => (
            <Badge size="sm" tone={STATUS_TONE[getValue()]} radius="full">
              {copy.statuses[getValue()]}
            </Badge>
          ),
        }),
      ]),
    [copy, locale],
  );

  return (
    <div className="table-demo">
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
