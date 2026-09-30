import { useMemo } from "react";
import { Table, createTableColumnHelper } from "@gem-org/gem-system";
import type { TableLabels } from "./demo.ts";
import "./table-demo.css";

type Person = { id: string; firstName: string; lastName: string; age: number; city: string };

const FIRST_NAMES = ["Rosa", "Facundo", "Julia", "Ramiro", "Amina", "Noah", "Elena", "Marco"];
const LAST_NAMES = ["Agresti", "Pardo", "Cenni", "Hilton", "Costa", "Berg", "Silva", "Nguyen"];
const CITIES = ["Córdoba", "Rosario", "Mendoza", "Salta", "Neuquén", "La Plata", "Tandil", "Ushuaia"];

const PEOPLE: Person[] = Array.from({ length: 1000 }, (_, index) => ({
  id: String(index + 1),
  firstName: FIRST_NAMES[index % FIRST_NAMES.length],
  lastName: LAST_NAMES[(index * 3) % LAST_NAMES.length],
  age: 18 + ((index * 7) % 52),
  city: CITIES[index % CITIES.length],
}));

const helper = createTableColumnHelper<Person>();

type VirtualizedCopy = { caption: string; number: string; firstName: string; lastName: string; age: string; city: string };

type VirtualizedTableProps = { copy: VirtualizedCopy; labels: TableLabels };

export function VirtualizedTable({ copy, labels }: VirtualizedTableProps) {
  const columns = useMemo(
    () =>
      helper.columns([
        helper.accessor((row) => Number(row.id), {
          id: "number",
          header: copy.number,
          meta: { align: "end", minWidth: 80 },
        }),
        helper.accessor("firstName", { header: copy.firstName, meta: { minWidth: 128 } }),
        helper.accessor("lastName", { header: copy.lastName, meta: { minWidth: 128 } }),
        helper.accessor("age", { header: copy.age, meta: { align: "end", minWidth: 72 } }),
        helper.accessor("city", { header: copy.city, meta: { minWidth: 128 } }),
      ]),
    [copy],
  );

  return (
    <div className="table-demo">
      <Table
        {...labels}
        caption={copy.caption}
        virtualized
        maxHeight={400}
        data={PEOPLE}
        columns={columns}
        getRowId={(row) => row.id}
      />
    </div>
  );
}
