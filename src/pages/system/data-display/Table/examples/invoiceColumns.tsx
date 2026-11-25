import { useMemo } from "react";
import { Badge, createTableColumnHelper } from "@gem-org/gem-system";
import {
  STATUS_TONE,
  formatDate,
  formatMoney,
  regionName,
  type Invoice,
  type InvoiceCopy,
} from "./demo.ts";

const helper = createTableColumnHelper<Invoice>();

type Options = { wide?: boolean };

export function useInvoiceColumns(
  copy: InvoiceCopy,
  locale: string,
  { wide = false }: Options = {},
) {
  return useMemo(() => {
    const base = [
      helper.accessor("number", {
        header: copy.columns.number,
        meta: { minWidth: 120, sticky: wide ? "start" : undefined },
      }),
      helper.accessor("customer", { header: copy.columns.customer, meta: { minWidth: 160 } }),
      helper.accessor("email", { header: copy.columns.email, meta: { minWidth: 180 } }),
      helper.accessor("amount", {
        header: copy.columns.amount,
        meta: { align: "end", minWidth: 120 },
        cell: ({ getValue }) => formatMoney(locale, getValue()),
      }),
      helper.accessor("status", {
        header: copy.columns.status,
        meta: { minWidth: 112 },
        cell: ({ getValue }) => (
          <Badge size="sm" tone={STATUS_TONE[getValue()]} radius="full">
            {copy.statuses[getValue()]}
          </Badge>
        ),
      }),
      helper.accessor("issued", {
        header: copy.columns.issued,
        meta: { minWidth: 128 },
        cell: ({ getValue }) => formatDate(locale, getValue()),
      }),
    ];

    if (!wide) return helper.columns(base);

    return helper.columns([
      ...base,
      helper.accessor("city", { header: copy.columns.city, meta: { minWidth: 140 } }),
      helper.accessor("country", {
        header: copy.columns.country,
        meta: { minWidth: 160 },
        cell: ({ getValue }) => regionName(locale, getValue()),
      }),
      helper.accessor("method", {
        header: copy.columns.method,
        meta: { minWidth: 140, sticky: "end" },
        cell: ({ getValue }) => copy.methods[getValue()],
      }),
    ]);
  }, [copy, locale, wide]);
}
