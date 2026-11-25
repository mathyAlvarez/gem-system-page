import { useState } from "react";
import { InputSearch, Table } from "@gem-org/gem-system";
import { INVOICES, type InvoiceCopy, type TableLabels } from "./demo.ts";
import { useInvoiceColumns } from "./invoiceColumns.tsx";
import "./table-demo.css";

type EmptyTableProps = {
  copy: InvoiceCopy;
  labels: TableLabels;
  locale: string;
  search: string;
  placeholder: string;
  noMatches: string;
};

export function EmptyTable({
  copy,
  labels,
  locale,
  search,
  placeholder,
  noMatches,
}: EmptyTableProps) {
  const columns = useInvoiceColumns(copy, locale);
  const [query, setQuery] = useState("zeta");
  const term = query.trim().toLowerCase();
  const data = INVOICES.slice(0, 8).filter(
    (item) =>
      item.customer.toLowerCase().includes(term) || item.number.toLowerCase().includes(term),
  );

  return (
    <div className="table-demo">
      <div className="table-demo__search">
        <InputSearch
          label={search}
          placeholder={placeholder}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onClear={() => setQuery("")}
        />
      </div>
      <Table
        {...labels}
        caption={copy.caption}
        emptyMessage={noMatches.replace("{query}", query.trim())}
        data={data}
        columns={columns}
        getRowId={(row) => row.id}
      />
    </div>
  );
}
