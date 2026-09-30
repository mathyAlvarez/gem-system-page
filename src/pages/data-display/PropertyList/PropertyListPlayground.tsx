import { useState } from "react";
import { PropertyList, Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import {
  PROPERTY_LIST_ALIGNS,
  PROPERTY_LIST_LAYOUTS,
  PROPERTY_LIST_RADII,
  PROPERTY_LIST_SIZES,
  type RowsCopy,
} from "./examples/demo.ts";
import "./examples/property-list-demo.css";

const booleanOptions = ["true", "false"] as const;
const columnOptions = ["1", "2", "3"] as const;
const labelWidthOptions = ["auto", "120", "180"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

export function PropertyListPlayground() {
  const { t } = useTranslation("propertyList");
  const { title, items } = t("stories.base.texts", { returnObjects: true }) as RowsCopy;
  const [layout, setLayout] = useState<string>("horizontal");
  const [size, setSize] = useState<string>("md");
  const [columns, setColumns] = useState<string>("1");
  const [align, setAlign] = useState<string>("start");
  const [bordered, setBordered] = useState<string>("false");
  const [radius, setRadius] = useState<string>("md");
  const [divided, setDivided] = useState<string>("true");
  const [striped, setStriped] = useState<string>("false");
  const [colon, setColon] = useState<string>("true");
  const [labelWidth, setLabelWidth] = useState<string>("auto");

  const attrs = [
    `title="${title}"`,
    layout !== "horizontal" && `layout="${layout}"`,
    size !== "md" && `size="${size}"`,
    columns !== "1" && `columns={${columns}}`,
    align !== "start" && `align="${align}"`,
    bordered === "true" && "bordered",
    bordered === "true" && radius !== "md" && `radius="${radius}"`,
    divided === "false" && "divided={false}",
    striped === "true" && "striped",
    colon === "false" && "colon={false}",
    labelWidth !== "auto" && `labelWidth={${labelWidth}}`,
  ].filter(Boolean);

  const itemLines = items.map((item) => `    { key: "${item.key}", label: "${item.label}", children: "${item.children}" },`);

  const code = `import { PropertyList } from "@gem-org/gem-system";

<PropertyList
  ${attrs.join("\n  ")}
  items={[
${itemLines.join("\n")}
  ]}
/>`;

  const selects = [
    { id: "layout", value: layout, options: PROPERTY_LIST_LAYOUTS, onChange: pick(setLayout) },
    { id: "size", value: size, options: PROPERTY_LIST_SIZES, onChange: pick(setSize) },
    { id: "columns", value: columns, options: columnOptions, onChange: pick(setColumns) },
    { id: "align", value: align, options: PROPERTY_LIST_ALIGNS, onChange: pick(setAlign) },
    { id: "bordered", value: bordered, options: booleanOptions, onChange: pick(setBordered) },
    { id: "radius", value: radius, options: PROPERTY_LIST_RADII, onChange: pick(setRadius) },
    { id: "divided", value: divided, options: booleanOptions, onChange: pick(setDivided) },
    { id: "striped", value: striped, options: booleanOptions, onChange: pick(setStriped) },
    { id: "colon", value: colon, options: booleanOptions, onChange: pick(setColon) },
    { id: "labelWidth", value: labelWidth, options: labelWidthOptions, onChange: pick(setLabelWidth) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="property-list-playground">
        {selects.map((select) => (
          <div key={select.id} className="property-list-playground__field">
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
        <div className="property-list-demo">
          <PropertyList
            title={title}
            layout={layout as (typeof PROPERTY_LIST_LAYOUTS)[number]}
            size={size as (typeof PROPERTY_LIST_SIZES)[number]}
            columns={Number(columns)}
            align={align as (typeof PROPERTY_LIST_ALIGNS)[number]}
            bordered={bordered === "true"}
            radius={radius as (typeof PROPERTY_LIST_RADII)[number]}
            divided={divided === "true"}
            striped={striped === "true"}
            colon={colon === "true"}
            labelWidth={labelWidth === "auto" ? undefined : Number(labelWidth)}
            items={items}
          />
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
