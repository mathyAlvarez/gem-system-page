import { useMemo } from "react";
import { Badge, Table, createTableColumnHelper } from "@gem-org/gem-system";
import { formatDate, formatMoney, type TableLabels } from "./demo.ts";
import "./table-demo.css";

type Order = { id: string; date: string; customer: string; amount: number; price: number };
type Dessert = { id: string; calories: number; fat: number; carbs: number; protein: number; history: Order[] };

const DESSERTS: Dessert[] = [
  {
    id: "yoghurt",
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
    history: [
      { id: "y-1", date: "2026-01-05", customer: "11091700", amount: 3, price: 3.99 },
      { id: "y-2", date: "2026-01-02", customer: "—", amount: 1, price: 0.99 },
    ],
  },
  {
    id: "sandwich",
    calories: 237,
    fat: 9,
    carbs: 37,
    protein: 4.3,
    history: [{ id: "s-1", date: "2026-01-05", customer: "11091701", amount: 2, price: 2.98 }],
  },
  {
    id: "eclair",
    calories: 262,
    fat: 16,
    carbs: 24,
    protein: 6,
    history: [{ id: "e-1", date: "2026-01-02", customer: "11091702", amount: 2, price: 5.98 }],
  },
  { id: "cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3, history: [] },
];

const dessertHelper = createTableColumnHelper<Dessert>();
const orderHelper = createTableColumnHelper<Order>();

type ExpandCopy = {
  caption: string;
  history: string;
  orders: string;
  names: Record<string, string>;
  columns: { name: string; calories: string; fat: string; carbs: string; protein: string };
  historyColumns: { date: string; customer: string; amount: string; price: string };
};

type ExpandTableProps = { copy: ExpandCopy; labels: TableLabels; locale: string };

export function ExpandTable({ copy, labels, locale }: ExpandTableProps) {
  const columns = useMemo(
    () =>
      dessertHelper.columns([
        dessertHelper.accessor((row) => copy.names[row.id] ?? row.id, {
          id: "name",
          header: copy.columns.name,
          meta: { minWidth: 180 },
        }),
        dessertHelper.accessor("calories", { header: copy.columns.calories, meta: { align: "end", minWidth: 96 } }),
        dessertHelper.accessor("fat", { header: copy.columns.fat, meta: { align: "end", minWidth: 88 } }),
        dessertHelper.accessor("carbs", { header: copy.columns.carbs, meta: { align: "end", minWidth: 104 } }),
        dessertHelper.accessor("protein", { header: copy.columns.protein, meta: { align: "end", minWidth: 104 } }),
      ]),
    [copy],
  );

  const historyColumns = useMemo(
    () =>
      orderHelper.columns([
        orderHelper.accessor("date", {
          header: copy.historyColumns.date,
          meta: { minWidth: 128 },
          cell: ({ getValue }) => formatDate(locale, getValue()),
        }),
        orderHelper.accessor("customer", { header: copy.historyColumns.customer, meta: { minWidth: 140 } }),
        orderHelper.accessor("amount", { header: copy.historyColumns.amount, meta: { align: "end", minWidth: 88 } }),
        orderHelper.accessor("price", {
          header: copy.historyColumns.price,
          meta: { align: "end", minWidth: 120 },
          cell: ({ getValue }) => formatMoney(locale, getValue()),
        }),
      ]),
    [copy, locale],
  );

  return (
    <div className="table-demo">
      <Table
        {...labels}
        caption={copy.caption}
        data={DESSERTS}
        columns={columns}
        getRowId={(row) => row.id}
        defaultExpanded={{ yoghurt: true }}
        isRowExpandable={(row) => row.history.length > 0}
        renderExpanded={(dessert) => (
          <Table
            {...labels}
            caption={`${copy.history}: ${copy.names[dessert.id]}`}
            showCaption
            extra={
              <Badge size="sm" tone="neutral">
                {copy.orders.replace("{count}", String(dessert.history.length))}
              </Badge>
            }
            data={dessert.history}
            columns={historyColumns}
            getRowId={(row) => row.id}
            enableSorting={false}
            bordered={false}
            size="sm"
            radius="sm"
          />
        )}
      />
    </div>
  );
}
