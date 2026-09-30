import { useState } from "react";
import { CopyToClipboard, Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { INSTALL_COMMAND } from "./examples/demo.ts";

const variantOptions = [
  "transparent",
  "primary",
  "secondary",
  "tertiary",
  "danger",
  "success",
  "warning",
  "info",
  "neutral",
  "link",
] as const;
const sizeOptions = ["sm", "md", "lg", "xl"] as const;
const placementOptions = ["top", "bottom", "left", "right"] as const;
const timeoutOptions = ["2000", "800", "5000", "0"] as const;
const booleanOptions = ["true", "false"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

export function CopyToClipboardPlayground() {
  const { t } = useTranslation("copyToClipboard");
  const labels = t("common.labels", { returnObjects: true });
  const [variant, setVariant] = useState<string>("transparent");
  const [size, setSize] = useState<string>("md");
  const [iconOnly, setIconOnly] = useState<string>("true");
  const [rounded, setRounded] = useState<string>("false");
  const [tooltip, setTooltip] = useState<string>("true");
  const [tooltipPlacement, setTooltipPlacement] = useState<string>("top");
  const [timeout, setTimeoutMs] = useState<string>("2000");
  const [disabled, setDisabled] = useState<string>("false");

  const attrs = [
    `value="${INSTALL_COMMAND}"`,
    variant !== "transparent" && `variant="${variant}"`,
    size !== "md" && `size="${size}"`,
    iconOnly === "false" && "iconOnly={false}",
    rounded === "true" && "rounded",
    tooltip === "false" && "tooltip={false}",
    tooltipPlacement !== "top" && `tooltipPlacement="${tooltipPlacement}"`,
    timeout !== "2000" && `timeout={${timeout}}`,
    disabled === "true" && "disabled",
    `label="${labels.label}"`,
    `copiedLabel="${labels.copiedLabel}"`,
    `copyAriaLabel="${labels.copyAriaLabel}"`,
    `copiedAriaLabel="${labels.copiedAriaLabel}"`,
    `errorAriaLabel="${labels.errorAriaLabel}"`,
  ].filter(Boolean);

  const code = `import { CopyToClipboard } from "@gem-org/gem-system";

export function Example() {
  return (
    <CopyToClipboard
      ${attrs.join("\n      ")}
    />
  );
}`;

  const selects = [
    { id: "variant", value: variant, options: variantOptions, onChange: pick(setVariant) },
    { id: "size", value: size, options: sizeOptions, onChange: pick(setSize) },
    { id: "iconOnly", value: iconOnly, options: booleanOptions, onChange: pick(setIconOnly) },
    { id: "rounded", value: rounded, options: booleanOptions, onChange: pick(setRounded) },
    { id: "tooltip", value: tooltip, options: booleanOptions, onChange: pick(setTooltip) },
    { id: "tooltipPlacement", value: tooltipPlacement, options: placementOptions, onChange: pick(setTooltipPlacement) },
    { id: "timeout", value: timeout, options: timeoutOptions, onChange: pick(setTimeoutMs) },
    { id: "disabled", value: disabled, options: booleanOptions, onChange: pick(setDisabled) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="copy-playground">
        {selects.map((select) => (
          <div key={select.id} className="copy-playground__field">
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
        <CopyToClipboard
          key={`${iconOnly}-${timeout}`}
          value={INSTALL_COMMAND}
          variant={variant as (typeof variantOptions)[number]}
          size={size as (typeof sizeOptions)[number]}
          iconOnly={iconOnly === "true"}
          rounded={rounded === "true"}
          tooltip={tooltip === "true"}
          tooltipPlacement={tooltipPlacement as (typeof placementOptions)[number]}
          timeout={Number(timeout)}
          disabled={disabled === "true"}
          {...labels}
        />
      </DemoBlock>
    </DocsSection>
  );
}
