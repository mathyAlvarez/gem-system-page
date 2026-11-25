import { useMemo, useState } from "react";
import { Button, Table, createTableColumnHelper } from "@gem-org/gem-system";
import { Download, Trash } from "@gem-org/gem-system/icons";
import { INVOICES, formatMoney, type Invoice, type InvoiceCopy, type TableLabels } from "./demo.ts";
import "./table-demo.css";

const helper = createTableColumnHelper<Invoice>();

type ActionsTableProps = {
  copy: InvoiceCopy;
  labels: TableLabels;
  locale: string;
  actions: string;
  download: string;
  remove: string;
  restore: string;
};

export function ActionsTable({
  copy,
  labels,
  locale,
  actions,
  download,
  remove,
  restore,
}: ActionsTableProps) {
  const [data, setData] = useState(() => INVOICES.slice(0, 5));

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
        helper.display({
          id: "actions",
          header: actions,
          meta: { align: "end", minWidth: 104 },
          cell: ({ row }) => (
            <span className="table-demo__actions">
              <Button
                variant="transparent"
                size="sm"
                iconOnly
                aria-label={`${download} ${row.original.number}`}
              >
                <Download size="sm" />
              </Button>
              <Button
                variant="transparent"
                size="sm"
                iconOnly
                aria-label={`${remove} ${row.original.number}`}
                onClick={() =>
                  setData((current) => current.filter((item) => item.id !== row.original.id))
                }
              >
                <Trash size="sm" />
              </Button>
            </span>
          ),
        }),
      ]),
    [copy, locale, actions, download, remove],
  );

  return (
    <div className="table-demo">
      <Table
        {...labels}
        caption={copy.caption}
        data={data}
        columns={columns}
        getRowId={(row) => row.id}
        footer={
          data.length < 5 ? (
            <Button size="sm" variant="secondary" onClick={() => setData(INVOICES.slice(0, 5))}>
              {restore}
            </Button>
          ) : undefined
        }
      />
    </div>
  );
}
