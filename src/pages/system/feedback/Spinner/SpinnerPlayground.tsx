import { useState } from "react";
import { Select, Spinner, Typography, type SelectValue } from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import {
  SPINNER_PLACEMENTS,
  SPINNER_SIZES,
  SPINNER_TONES,
  SPINNER_VARIANTS,
} from "./examples/demo.ts";
import "./examples/spinner-demo.css";

const booleanOptions = ["true", "false"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

export function SpinnerPlayground() {
  const { t } = useTranslation("spinner");
  const text = t("playground.label");
  const ariaLabel = t("common.ariaLabel");
  const [size, setSize] = useState<string>("md");
  const [tone, setTone] = useState<string>("primary");
  const [variant, setVariant] = useState<string>("ring");
  const [showLabel, setShowLabel] = useState<string>("true");
  const [labelPlacement, setLabelPlacement] = useState<string>("end");
  const [disabled, setDisabled] = useState<string>("false");

  const hasLabel = showLabel === "true";

  const attrs = [
    size !== "md" && `size="${size}"`,
    tone !== "primary" && `tone="${tone}"`,
    variant !== "ring" && `variant="${variant}"`,
    hasLabel ? `label="${text}"` : `aria-label="${ariaLabel}"`,
    hasLabel && labelPlacement !== "end" && `labelPlacement="${labelPlacement}"`,
    disabled === "true" && "disabled",
  ].filter(Boolean);

  const code = `import { Spinner } from "@gem-org/gem-system";

export function Example() {
  return <Spinner ${attrs.join(" ")} />;
}`;

  const selects = [
    { id: "size", value: size, options: SPINNER_SIZES, onChange: pick(setSize) },
    { id: "tone", value: tone, options: SPINNER_TONES, onChange: pick(setTone) },
    { id: "variant", value: variant, options: SPINNER_VARIANTS, onChange: pick(setVariant) },
    { id: "label", value: showLabel, options: booleanOptions, onChange: pick(setShowLabel) },
    {
      id: "labelPlacement",
      value: labelPlacement,
      options: SPINNER_PLACEMENTS,
      onChange: pick(setLabelPlacement),
    },
    { id: "disabled", value: disabled, options: booleanOptions, onChange: pick(setDisabled) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="spinner-playground">
        {selects.map((select) => (
          <div key={select.id} className="spinner-playground__field">
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
        <div className="spinner-center">
          <Spinner
            size={size as (typeof SPINNER_SIZES)[number]}
            tone={tone as (typeof SPINNER_TONES)[number]}
            variant={variant as (typeof SPINNER_VARIANTS)[number]}
            label={hasLabel ? text : undefined}
            aria-label={hasLabel ? undefined : ariaLabel}
            labelPlacement={labelPlacement as (typeof SPINNER_PLACEMENTS)[number]}
            disabled={disabled === "true"}
          />
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
