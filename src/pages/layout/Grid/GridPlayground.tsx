import { useState } from "react";
import {
  Grid,
  Select,
  Typography,
  type GridAutoMode,
  type GridColumns,
  type GridStack,
  type LayoutAlign,
  type SelectValue,
} from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { GridCell } from "./examples/GridCell.tsx";
import { gridAlignOptions, gridAutoModes } from "./gridDocs.ts";

const none = "—";
const columnOptions = ["1", "2", "3", "4", "6", "12"] as const;
const autoOptions = [none, ...gridAutoModes] as const;
const gapOptions = [none, "1", "4", "8", "24", "2rem"] as const;
const stackOptions = [none, "false", "sm", "md"] as const;
const alignOptions = [none, ...gridAlignOptions] as const;
const countOptions = ["3", "6", "8", "12"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

const toGap = (value: string) => (value === none ? undefined : /^\d+$/.test(value) ? Number(value) : value);

const toStack = (value: string): GridStack | undefined =>
  value === none ? undefined : value === "false" ? false : (value as GridStack);

export function GridPlayground() {
  const { t } = useTranslation("grid");
  const [columns, setColumns] = useState("3");
  const [auto, setAuto] = useState<string>(none);
  const [gap, setGap] = useState<string>("4");
  const [stack, setStack] = useState<string>(none);
  const [align, setAlign] = useState<string>(none);
  const [count, setCount] = useState("6");

  const autoMode = auto === none ? undefined : (auto as GridAutoMode);
  const gapValue = toGap(gap);
  const stackValue = toStack(stack);
  const alignValue = align === none ? undefined : (align as LayoutAlign);

  const attrs = [
    autoMode ? `auto="${autoMode}"` : columns !== "12" && `columns={${columns}}`,
    autoMode && 'minItemWidth="10rem"',
    typeof gapValue === "number" && `gap={${gapValue}}`,
    typeof gapValue === "string" && `gap="${gapValue}"`,
    stackValue === false && "stack={false}",
    typeof stackValue === "string" && `stack="${stackValue}"`,
    alignValue && `align="${alignValue}"`,
  ].filter(Boolean);

  const code = `import { Grid } from "@gem-org/gem-system";

export function Example() {
  return (
    <Grid${attrs.length ? ` ${attrs.join(" ")}` : ""}>
      {items.map((item) => (
        <div key={item.id}>{item.label}</div>
      ))}
    </Grid>
  );
}`;

  const selects = [
    { id: "columns", value: columns, options: columnOptions, onChange: pick(setColumns) },
    { id: "auto", value: auto, options: autoOptions, onChange: pick(setAuto) },
    { id: "gap", value: gap, options: gapOptions, onChange: pick(setGap) },
    { id: "stack", value: stack, options: stackOptions, onChange: pick(setStack) },
    { id: "align", value: align, options: alignOptions, onChange: pick(setAlign) },
    { id: "count", value: count, options: countOptions, onChange: pick(setCount) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="grid-playground">
        {selects.map((select) => (
          <div key={select.id} className="grid-playground__field">
            <Typography variant="label">{t(`playground.${select.id}`)}</Typography>
            <Select
              aria-label={t(`playground.${select.id}`)}
              options={toOptions(select.options)}
              value={select.value}
              onChange={select.onChange}
              searchable={false}
            />
          </div>
        ))}
      </div>

      <DemoBlock code={code} label="Example.tsx" stack>
        <Grid
          columns={Number(columns) as GridColumns}
          auto={autoMode}
          minItemWidth={autoMode ? "10rem" : undefined}
          gap={gapValue}
          stack={stackValue}
          align={alignValue}
        >
          {Array.from({ length: Number(count) }, (_, index) => (
            <GridCell key={index} tall={alignValue !== undefined && index === 0}>
              {index + 1}
            </GridCell>
          ))}
        </Grid>
      </DemoBlock>
    </DocsSection>
  );
}
