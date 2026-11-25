import { useState } from "react";
import { Divider, Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import {
  DIVIDER_ORIENTATIONS,
  DIVIDER_PLACEMENTS,
  DIVIDER_SIZES,
  DIVIDER_TONES,
  DIVIDER_VARIANTS,
} from "./examples/demo.ts";
import "./examples/divider-demo.css";

const labelOptions = ["none", "text"] as const;
const decorativeOptions = ["auto", "true", "false"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

export function DividerPlayground() {
  const { t } = useTranslation("divider");
  const [orientation, setOrientation] = useState<string>("horizontal");
  const [variant, setVariant] = useState<string>("solid");
  const [size, setSize] = useState<string>("sm");
  const [tone, setTone] = useState<string>("default");
  const [label, setLabel] = useState<string>("none");
  const [labelPlacement, setLabelPlacement] = useState<string>("center");
  const [decorative, setDecorative] = useState<string>("auto");

  const labelText = t("playground.label");
  const hasLabel = label === "text";
  const vertical = orientation === "vertical";

  const attrs = [
    vertical && 'orientation="vertical"',
    variant !== "solid" && `variant="${variant}"`,
    size !== "sm" && `size="${size}"`,
    tone !== "default" && `tone="${tone}"`,
    hasLabel && labelPlacement !== "center" && `labelPlacement="${labelPlacement}"`,
    decorative !== "auto" && `decorative={${decorative}}`,
  ].filter(Boolean);

  const props = attrs.length ? ` ${attrs.join(" ")}` : "";
  const element = hasLabel ? `<Divider${props}>${labelText}</Divider>` : `<Divider${props} />`;
  const code = `import { Divider } from "@gem-org/gem-system";

${element}`;

  const selects = [
    {
      id: "orientation",
      value: orientation,
      options: DIVIDER_ORIENTATIONS,
      onChange: pick(setOrientation),
    },
    { id: "variant", value: variant, options: DIVIDER_VARIANTS, onChange: pick(setVariant) },
    { id: "size", value: size, options: DIVIDER_SIZES, onChange: pick(setSize) },
    { id: "tone", value: tone, options: DIVIDER_TONES, onChange: pick(setTone) },
    { id: "children", value: label, options: labelOptions, onChange: pick(setLabel) },
    {
      id: "labelPlacement",
      value: labelPlacement,
      options: DIVIDER_PLACEMENTS,
      onChange: pick(setLabelPlacement),
    },
    {
      id: "decorative",
      value: decorative,
      options: decorativeOptions,
      onChange: pick(setDecorative),
    },
  ] as const;

  const divider = (
    <Divider
      orientation={orientation as (typeof DIVIDER_ORIENTATIONS)[number]}
      variant={variant as (typeof DIVIDER_VARIANTS)[number]}
      size={size as (typeof DIVIDER_SIZES)[number]}
      tone={tone as (typeof DIVIDER_TONES)[number]}
      labelPlacement={labelPlacement as (typeof DIVIDER_PLACEMENTS)[number]}
      decorative={decorative === "auto" ? undefined : decorative === "true"}
    >
      {hasLabel ? labelText : null}
    </Divider>
  );

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="divider-playground">
        {selects.map((select) => (
          <div key={select.id} className="divider-playground__field">
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
        {vertical ? (
          <div className="divider-row">
            <p className="divider-copy">{t("playground.start")}</p>
            {divider}
            <p className="divider-copy">{t("playground.end")}</p>
          </div>
        ) : (
          <div className="divider-demo">
            <div className="divider-stack">
              <p className="divider-copy">{t("playground.start")}</p>
              {divider}
              <p className="divider-copy">{t("playground.end")}</p>
            </div>
          </div>
        )}
      </DemoBlock>
    </DocsSection>
  );
}
