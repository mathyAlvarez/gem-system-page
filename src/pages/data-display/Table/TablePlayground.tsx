import { useState } from "react";
import { Select, Table, Typography, type SelectValue } from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import {
  INVOICES,
  TABLE_CAPTION_SIDES,
  TABLE_RADII,
  TABLE_SIZES,
  type InvoiceCopy,
  type TableLabels,
} from "./examples/demo.ts";
import { useInvoiceColumns } from "./examples/invoiceColumns.tsx";
import "./examples/table-demo.css";

const booleanOptions = ["true", "false"] as const;
const rowsOptions = ["0", "4", "8", "24"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

type TablePlaygroundProps = { copy: InvoiceCopy; labels: TableLabels; locale: string };

export function TablePlayground({ copy, labels, locale }: TablePlaygroundProps) {
  const { t } = useTranslation("table");
  const columns = useInvoiceColumns(copy, locale);
  const [size, setSize] = useState<string>("md");
  const [radius, setRadius] = useState<string>("md");
  const [bordered, setBordered] = useState<string>("true");
  const [rows, setRows] = useState<string>("8");
  const [enableSorting, setEnableSorting] = useState<string>("true");
  const [enableRowSelection, setEnableRowSelection] = useState<string>("false");
  const [selectOnRowClick, setSelectOnRowClick] = useState<string>("false");
  const [expandable, setExpandable] = useState<string>("false");
  const [stickyHeader, setStickyHeader] = useState<string>("false");
  const [showCaption, setShowCaption] = useState<string>("false");
  const [captionSide, setCaptionSide] = useState<string>("top");

  const sticky = stickyHeader === "true";

  const attrs = [
    `caption="${copy.caption}"`,
    "data={invoices}",
    "columns={columns}",
    "getRowId={(row) => row.id}",
    size !== "md" && `size="${size}"`,
    radius !== "md" && `radius="${radius}"`,
    bordered === "false" && "bordered={false}",
    enableSorting === "false" && "enableSorting={false}",
    enableRowSelection === "true" && "enableRowSelection",
    enableRowSelection === "true" && selectOnRowClick === "true" && "selectOnRowClick",
    expandable === "true" && "renderExpanded={(row) => <p>{row.email}</p>}",
    sticky && "stickyHeader",
    sticky && "maxHeight={280}",
    showCaption === "true" && "showCaption",
    showCaption === "true" && captionSide !== "top" && `captionSide="${captionSide}"`,
    `selectAllLabel="${labels.selectAllLabel}"`,
    `selectRowLabel="${labels.selectRowLabel}"`,
    `emptyMessage="${labels.emptyMessage}"`,
  ].filter(Boolean);

  const code = `import { Table } from "@gem-org/gem-system";

<Table
  ${attrs.join("\n  ")}
/>`;

  const selects = [
    { id: "size", value: size, options: TABLE_SIZES, onChange: pick(setSize) },
    { id: "radius", value: radius, options: TABLE_RADII, onChange: pick(setRadius) },
    { id: "bordered", value: bordered, options: booleanOptions, onChange: pick(setBordered) },
    { id: "rows", value: rows, options: rowsOptions, onChange: pick(setRows) },
    { id: "enableSorting", value: enableSorting, options: booleanOptions, onChange: pick(setEnableSorting) },
    {
      id: "enableRowSelection",
      value: enableRowSelection,
      options: booleanOptions,
      onChange: pick(setEnableRowSelection),
    },
    { id: "selectOnRowClick", value: selectOnRowClick, options: booleanOptions, onChange: pick(setSelectOnRowClick) },
    { id: "renderExpanded", value: expandable, options: booleanOptions, onChange: pick(setExpandable) },
    { id: "stickyHeader", value: stickyHeader, options: booleanOptions, onChange: pick(setStickyHeader) },
    { id: "showCaption", value: showCaption, options: booleanOptions, onChange: pick(setShowCaption) },
    { id: "captionSide", value: captionSide, options: TABLE_CAPTION_SIDES, onChange: pick(setCaptionSide) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="table-playground">
        {selects.map((select) => (
          <div key={select.id} className="table-playground__field">
            <Typography variant="label">{select.id}</Typography>
            <Select
              aria-label={select.id}
              options={toOptions(select.options)}
              value={select.value}
              onChange={select.onChange}
              searchable={false}
            />
          </div>
        ))}
      </div>

      <DemoBlock code={code} label="Example.tsx">
        <div className="table-demo">
          <Table
            {...labels}
            caption={copy.caption}
            data={INVOICES.slice(0, Number(rows))}
            columns={columns}
            getRowId={(row) => row.id}
            size={size as (typeof TABLE_SIZES)[number]}
            radius={radius as (typeof TABLE_RADII)[number]}
            bordered={bordered === "true"}
            enableSorting={enableSorting === "true"}
            enableRowSelection={enableRowSelection === "true"}
            selectOnRowClick={selectOnRowClick === "true"}
            renderExpanded={
              expandable === "true"
                ? (row) => <p className="table-playground__detail">{row.email}</p>
                : undefined
            }
            stickyHeader={sticky}
            maxHeight={sticky ? 280 : undefined}
            showCaption={showCaption === "true"}
            captionSide={captionSide as (typeof TABLE_CAPTION_SIDES)[number]}
          />
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
