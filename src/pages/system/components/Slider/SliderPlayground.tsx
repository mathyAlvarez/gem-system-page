import { useState } from "react";
import {
  Select,
  Slider,
  Switch,
  Typography,
  type SelectValue,
  type SliderSize,
  type SliderTone,
} from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { sliderSizes, sliderTones } from "./sliderDocs.ts";

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));
const suffixes = ["—", "%", "px", "°C"];

type Flags = {
  range: boolean;
  showValue: boolean;
  isInvalid: boolean;
  isDisabled: boolean;
  isRequired: boolean;
};

const flagDefaults: Flags = {
  range: false,
  showValue: true,
  isInvalid: false,
  isDisabled: false,
  isRequired: false,
};
const flagOrder = Object.keys(flagDefaults) as (keyof Flags)[];

const pick =
  <T extends string>(setter: (value: T) => void) =>
  (value: SelectValue) => {
    if (typeof value === "string") setter(value as T);
  };

export function SliderPlayground() {
  const { t } = useTranslation("slider");
  const [size, setSize] = useState<SliderSize>("md");
  const [tone, setTone] = useState<SliderTone>("primary");
  const [suffix, setSuffix] = useState("—");
  const [flags, setFlags] = useState<Flags>(flagDefaults);

  const label = t("playground.label");
  const helperText = t("playground.helperText");
  const { range, ...rest } = flags;
  const resolvedSuffix = suffix === "—" ? undefined : suffix;

  const attrs = [
    `label=${JSON.stringify(label)}`,
    `helperText=${JSON.stringify(helperText)}`,
    range ? "defaultValue={[20, 70]}" : "defaultValue={40}",
    size !== "md" && `size="${size}"`,
    tone !== "primary" && `tone="${tone}"`,
    resolvedSuffix && `suffix="${resolvedSuffix}"`,
    ...flagOrder
      .filter((flag) => flag !== "range" && flags[flag] !== flagDefaults[flag])
      .map((flag) => (flags[flag] ? flag : `${flag}={false}`)),
  ].filter(Boolean);

  const code = `import { Slider } from "@gem-org/gem-system";

export function Example() {
  return (
    <Slider
${attrs.map((attr) => `      ${attr}`).join("\n")}
    />
  );
}`;

  const selects = [
    { id: "size", value: size, options: sliderSizes, onChange: pick<SliderSize>(setSize) },
    { id: "tone", value: tone, options: sliderTones, onChange: pick<SliderTone>(setTone) },
    { id: "suffix", value: suffix, options: suffixes, onChange: pick<string>(setSuffix) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="slider-playground">
        {selects.map((select) => (
          <div key={select.id} className="slider-playground__field">
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
        <div className="slider-playground__flags">
          {flagOrder.map((flag) => (
            <Switch
              key={flag}
              size="sm"
              label={t(`playground.${flag}`)}
              checked={flags[flag]}
              onChange={(event) =>
                setFlags((current) => ({ ...current, [flag]: event.target.checked }))
              }
            />
          ))}
        </div>
      </div>

      <DemoBlock code={code} label="Example.tsx">
        <div className="slider-demo">
          <Slider
            key={range ? "range" : "single"}
            label={label}
            helperText={helperText}
            defaultValue={range ? [20, 70] : 40}
            size={size}
            tone={tone}
            suffix={resolvedSuffix}
            minAriaLabel={t("rangeLabels.min")}
            maxAriaLabel={t("rangeLabels.max")}
            {...rest}
          />
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
