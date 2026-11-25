import { useMemo } from "react";
import { Table, createTableColumnHelper } from "@gem-org/gem-system";
import { regionName, type TableLabels } from "./demo.ts";
import "./table-demo.css";

type CountryRow = { id: string; population: number; size: number };

const COUNTRIES: CountryRow[] = [
  { id: "IN", population: 1_324_171_354, size: 3_287_263 },
  { id: "CN", population: 1_403_500_365, size: 9_596_961 },
  { id: "IT", population: 60_483_973, size: 301_340 },
  { id: "US", population: 327_167_434, size: 9_833_517 },
  { id: "CA", population: 37_602_103, size: 9_984_670 },
  { id: "AU", population: 25_464_116, size: 7_692_024 },
  { id: "DE", population: 82_927_922, size: 357_578 },
  { id: "IE", population: 4_853_506, size: 70_273 },
  { id: "MX", population: 126_577_691, size: 1_972_550 },
  { id: "JP", population: 126_317_000, size: 377_973 },
  { id: "AR", population: 45_808_747, size: 2_780_400 },
  { id: "BR", population: 210_147_125, size: 8_515_767 },
];

const helper = createTableColumnHelper<CountryRow>();

type GroupsCopy = {
  caption: string;
  country: string;
  details: string;
  name: string;
  iso: string;
  population: string;
  size: string;
  density: string;
};

type GroupsTableProps = { copy: GroupsCopy; labels: TableLabels; locale: string };

export function GroupsTable({ copy, labels, locale }: GroupsTableProps) {
  const columns = useMemo(() => {
    const integer = new Intl.NumberFormat(locale);
    const decimal = new Intl.NumberFormat(locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return helper.columns([
      helper.group({
        id: "country",
        header: copy.country,
        columns: helper.columns([
          helper.accessor((row) => regionName(locale, row.id), {
            id: "name",
            header: copy.name,
            meta: { minWidth: 160 },
          }),
          helper.accessor("id", { header: copy.iso, meta: { minWidth: 96 } }),
        ]),
      }),
      helper.group({
        id: "details",
        header: copy.details,
        columns: helper.columns([
          helper.accessor("population", {
            header: copy.population,
            meta: { align: "end", minWidth: 136 },
            cell: ({ getValue }) => integer.format(getValue()),
          }),
          helper.accessor("size", {
            header: copy.size,
            meta: { align: "end", minWidth: 128 },
            cell: ({ getValue }) => integer.format(getValue()),
          }),
          helper.accessor((row) => row.population / row.size, {
            id: "density",
            header: copy.density,
            meta: { align: "end", minWidth: 112 },
            cell: ({ getValue }) => decimal.format(getValue()),
          }),
        ]),
      }),
    ]);
  }, [copy, locale]);

  return (
    <div className="table-demo">
      <Table
        {...labels}
        caption={copy.caption}
        showCaption
        stickyHeader
        maxHeight={320}
        data={COUNTRIES}
        columns={columns}
        getRowId={(row) => row.id}
      />
    </div>
  );
}
