import { useState } from "react";
import { ProgressBar, Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { PROGRESS_RADII, PROGRESS_SIZES, PROGRESS_TONES } from "./examples/demo.ts";
import "./examples/progress-demo.css";

const valueOptions = ["0", "25", "42", "64", "100"] as const;
const loadOptions = ["right", "left"] as const;
const booleanOptions = ["true", "false"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

export function ProgressBarPlayground() {
  const { t } = useTranslation("progressBar");
  const label = t("playground.label");
  const [value, setValue] = useState<string>("42");
  const [size, setSize] = useState<string>("md");
  const [tone, setTone] = useState<string>("primary");
  const [radius, setRadius] = useState<string>("full");
  const [loadPosition, setLoadPosition] = useState<string>("right");
  const [isIndeterminate, setIsIndeterminate] = useState<string>("false");
  const [showValue, setShowValue] = useState<string>("true");
  const [showThumb, setShowThumb] = useState<string>("false");
  const [disabled, setDisabled] = useState<string>("false");

  const attrs = [
    `label="${label}"`,
    isIndeterminate === "true" ? "isIndeterminate" : `value={${value}}`,
    size !== "md" && `size="${size}"`,
    tone !== "primary" && `tone="${tone}"`,
    radius !== "full" && `radius="${radius}"`,
    loadPosition !== "right" && `loadPosition="${loadPosition}"`,
    showValue === "true" && "showValue",
    showThumb === "true" && "showThumb",
    disabled === "true" && "disabled",
  ].filter(Boolean);

  const code = `import { ProgressBar } from "@gem-org/gem-system";

export function Example() {
  return (
    <ProgressBar
      ${attrs.join("\n      ")}
    />
  );
}`;

  const selects = [
    { id: "value", value, options: valueOptions, onChange: pick(setValue) },
    { id: "size", value: size, options: PROGRESS_SIZES, onChange: pick(setSize) },
    { id: "tone", value: tone, options: PROGRESS_TONES, onChange: pick(setTone) },
    { id: "radius", value: radius, options: PROGRESS_RADII, onChange: pick(setRadius) },
    {
      id: "loadPosition",
      value: loadPosition,
      options: loadOptions,
      onChange: pick(setLoadPosition),
    },
    {
      id: "isIndeterminate",
      value: isIndeterminate,
      options: booleanOptions,
      onChange: pick(setIsIndeterminate),
    },
    { id: "showValue", value: showValue, options: booleanOptions, onChange: pick(setShowValue) },
    { id: "showThumb", value: showThumb, options: booleanOptions, onChange: pick(setShowThumb) },
    { id: "disabled", value: disabled, options: booleanOptions, onChange: pick(setDisabled) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="progress-playground">
        {selects.map((select) => (
          <div key={select.id} className="progress-playground__field">
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
        <div className="progress-stack">
          <ProgressBar
            label={label}
            value={Number(value)}
            isIndeterminate={isIndeterminate === "true"}
            size={size as (typeof PROGRESS_SIZES)[number]}
            tone={tone as (typeof PROGRESS_TONES)[number]}
            radius={radius as (typeof PROGRESS_RADII)[number]}
            loadPosition={loadPosition as (typeof loadOptions)[number]}
            showValue={showValue === "true"}
            showThumb={showThumb === "true"}
            disabled={disabled === "true"}
          />
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
