import { useState } from "react";
import {
  Radio,
  Select,
  Switch,
  Typography,
  type RadioSize,
  type RadioTone,
  type SelectValue,
} from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { radioSizes, radioTones } from "./radioDocs.ts";

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

type Flags = {
  defaultChecked: boolean;
  isDisabled: boolean;
};

const flagDefaults: Flags = { defaultChecked: true, isDisabled: false };
const flagOrder = Object.keys(flagDefaults) as (keyof Flags)[];

const pick =
  <T extends string>(setter: (value: T) => void) =>
  (value: SelectValue) => {
    if (typeof value === "string") setter(value as T);
  };

export function RadioPlayground() {
  const { t } = useTranslation("radio");
  const [size, setSize] = useState<RadioSize>("md");
  const [tone, setTone] = useState<RadioTone>("primary");
  const [flags, setFlags] = useState<Flags>(flagDefaults);

  const label = t("playground.label");
  const helperText = t("playground.helperText");

  const attrs = [
    'name="playground"',
    'value="yes"',
    `label=${JSON.stringify(label)}`,
    `helperText=${JSON.stringify(helperText)}`,
    size !== "md" && `size="${size}"`,
    tone !== "primary" && `tone="${tone}"`,
    ...flagOrder.filter((flag) => flags[flag]),
  ].filter(Boolean);

  const code = `import { Radio } from "@gem-org/gem-system";

export function Example() {
  return (
    <Radio
${attrs.map((attr) => `      ${attr}`).join("\n")}
    />
  );
}`;

  const selects = [
    { id: "size", value: size, options: radioSizes, onChange: pick<RadioSize>(setSize) },
    { id: "tone", value: tone, options: radioTones, onChange: pick<RadioTone>(setTone) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="radio-playground">
        {selects.map((select) => (
          <div key={select.id} className="radio-playground__field">
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
        <div className="radio-playground__flags">
          {flagOrder.map((flag) => (
            <Switch
              key={flag}
              size="sm"
              label={t(`playground.${flag}`)}
              checked={flags[flag]}
              onChange={(event) => setFlags((current) => ({ ...current, [flag]: event.target.checked }))}
            />
          ))}
        </div>
      </div>

      <DemoBlock code={code} label="Example.tsx">
        <Radio
          key={String(flags.defaultChecked)}
          name="playground"
          value="yes"
          label={label}
          helperText={helperText}
          size={size}
          tone={tone}
          defaultChecked={flags.defaultChecked}
          isDisabled={flags.isDisabled}
        />
      </DemoBlock>
    </DocsSection>
  );
}
