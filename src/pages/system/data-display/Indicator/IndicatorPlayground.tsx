import { useState } from "react";
import { Indicator, Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import {
  INDICATOR_PLACEMENTS,
  INDICATOR_RADII,
  INDICATOR_SIZES,
  INDICATOR_TEXT_STYLES,
  INDICATOR_TONES,
  INDICATOR_VARIANTS,
} from "./examples/demo.ts";
import "./examples/indicator-demo.css";

const booleanOptions = ["true", "false"] as const;
const labelOptions = ["text", "none"] as const;
const textStyleOptions = ["none", ...INDICATOR_TEXT_STYLES] as const;
const offsetOptions = ["0", "8", "16"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

export function IndicatorPlayground() {
  const { t } = useTranslation("indicator");
  const [tone, setTone] = useState<string>("tertiary");
  const [variant, setVariant] = useState<string>("ribbon");
  const [size, setSize] = useState<string>("md");
  const [radius, setRadius] = useState<string>("md");
  const [placement, setPlacement] = useState<string>("top-end");
  const [label, setLabel] = useState<string>("text");
  const [textStyle, setTextStyle] = useState<string>("none");
  const [offset, setOffset] = useState<string>("0");
  const [isInvisible, setIsInvisible] = useState<string>("false");

  const text = variant === "fold" ? t("playground.short") : t("playground.label");
  const hasLabel = label === "text";
  const featured = t("playground.featured");

  const attrs = [
    tone !== "tertiary" && `tone="${tone}"`,
    variant !== "ribbon" && `variant="${variant}"`,
    size !== "md" && `size="${size}"`,
    radius !== "md" && `radius="${radius}"`,
    placement !== "top-end" && `placement="${placement}"`,
    offset !== "0" && `offset={${offset}}`,
    hasLabel ? `label="${text}"` : `aria-label="${featured}"`,
    hasLabel && textStyle !== "none" && `textStyle="${textStyle}"`,
    isInvisible === "true" && "isInvisible",
  ].filter(Boolean);

  const code = `import { Indicator } from "@gem-org/gem-system";

<Indicator
  ${attrs.join("\n  ")}
>
  <img src="/cover.jpg" alt="" />
</Indicator>`;

  const selects = [
    { id: "tone", value: tone, options: INDICATOR_TONES, onChange: pick(setTone) },
    { id: "variant", value: variant, options: INDICATOR_VARIANTS, onChange: pick(setVariant) },
    { id: "size", value: size, options: INDICATOR_SIZES, onChange: pick(setSize) },
    { id: "radius", value: radius, options: INDICATOR_RADII, onChange: pick(setRadius) },
    {
      id: "placement",
      value: placement,
      options: INDICATOR_PLACEMENTS,
      onChange: pick(setPlacement),
    },
    { id: "label", value: label, options: labelOptions, onChange: pick(setLabel) },
    { id: "textStyle", value: textStyle, options: textStyleOptions, onChange: pick(setTextStyle) },
    { id: "offset", value: offset, options: offsetOptions, onChange: pick(setOffset) },
    {
      id: "isInvisible",
      value: isInvisible,
      options: booleanOptions,
      onChange: pick(setIsInvisible),
    },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="indicator-playground">
        {selects.map((select) => (
          <div key={select.id} className="indicator-playground__field">
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
        <Indicator
          tone={tone as (typeof INDICATOR_TONES)[number]}
          variant={variant as (typeof INDICATOR_VARIANTS)[number]}
          size={size as (typeof INDICATOR_SIZES)[number]}
          radius={radius as (typeof INDICATOR_RADII)[number]}
          placement={placement as (typeof INDICATOR_PLACEMENTS)[number]}
          offset={Number(offset)}
          label={hasLabel ? text : undefined}
          aria-label={hasLabel ? undefined : featured}
          textStyle={
            textStyle === "none" ? undefined : (textStyle as (typeof INDICATOR_TEXT_STYLES)[number])
          }
          isInvisible={isInvisible === "true"}
        >
          <span className={`indicator-tile indicator-tile--radius-${radius}`} />
        </Indicator>
      </DemoBlock>
    </DocsSection>
  );
}
