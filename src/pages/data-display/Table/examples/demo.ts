export const TABLE_SIZES = ["sm", "md", "lg"] as const;
export const TABLE_RADII = ["sm", "md", "lg"] as const;
export const TABLE_CAPTION_SIDES = ["top", "bottom"] as const;

export type InvoiceStatus = "paid" | "open" | "overdue";
export type InvoiceMethod = "card" | "transfer" | "check";

export type Invoice = {
  id: string;
  number: string;
  customer: string;
  email: string;
  amount: number;
  status: InvoiceStatus;
  issued: string;
  city: string;
  country: string;
  method: InvoiceMethod;
};

export type InvoiceColumn = "number" | "customer" | "email" | "amount" | "status" | "issued" | "city" | "country" | "method";

export type InvoiceCopy = {
  caption: string;
  columns: Record<InvoiceColumn, string>;
  statuses: Record<InvoiceStatus, string>;
  methods: Record<InvoiceMethod, string>;
};

export type TableLabels = {
  selectAllLabel: string;
  selectRowLabel: string;
  expandRowLabel: string;
  collapseRowLabel: string;
  emptyMessage: string;
};

const STATUSES: InvoiceStatus[] = ["paid", "open", "overdue"];
const METHODS: InvoiceMethod[] = ["card", "transfer", "check"];

export const INVOICES: Invoice[] = Array.from({ length: 24 }, (_, index) => {
  const n = index + 1;
  return {
    id: String(n),
    number: `INV-${String(n).padStart(4, "0")}`,
    customer: ["Northwind", "Contoso", "Adventure Works", "Fabrikam"][index % 4],
    email: `${["ops", "billing", "finance", "ap"][index % 4]}@example.com`,
    amount: 1200 + index * 85,
    status: STATUSES[index % 3],
    issued: `2026-0${(index % 8) + 1}-${String((index % 27) + 1).padStart(2, "0")}`,
    city: ["Austin", "Lisboa", "Berlín", "Toronto"][index % 4],
    country: ["US", "PT", "DE", "CA"][index % 4],
    method: METHODS[index % 3],
  };
});

export const STATUS_TONE: Record<InvoiceStatus, "success" | "info" | "error"> = {
  paid: "success",
  open: "info",
  overdue: "error",
};

export const formatMoney = (locale: string, value: number) =>
  new Intl.NumberFormat(locale, { style: "currency", currency: "USD" }).format(value);

export const formatDate = (locale: string, iso: string) =>
  new Intl.DateTimeFormat(locale, { dateStyle: "medium" }).format(new Date(`${iso}T00:00:00`));

export const regionName = (locale: string, iso: string) =>
  new Intl.DisplayNames(locale, { type: "region" }).of(iso) ?? iso;
