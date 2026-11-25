import { useState } from "react";
import {
  Select,
  Switch,
  Typography,
  type SelectValue,
  type SwitchLabelPlacement,
  type SwitchSize,
  type SwitchTone,
} from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { switchLabelPlacements, switchSizes, switchTones } from "./switchDocs.ts";

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

type Flags = {
  defaultChecked: boolean;
  isInvalid: boolean;
  isDisabled: boolean;
  isRequired: boolean;
};

const flagDefaults: Flags = {
  defaultChecked: true,
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

export function SwitchPlayground() {
  const { t } = useTranslation("switch");
  const [size, setSize] = useState<SwitchSize>("md");
  const [tone, setTone] = useState<SwitchTone>("primary");
  const [labelPlacement, setLabelPlacement] = useState<SwitchLabelPlacement>("end");
  const [flags, setFlags] = useState<Flags>(flagDefaults);

  const label = t("playground.label");
  const helperText = t("playground.helperText");

  const attrs = [
    `label=${JSON.stringify(label)}`,
    `helperText=${JSON.stringify(helperText)}`,
    size !== "md" && `size="${size}"`,
    tone !== "primary" && `tone="${tone}"`,
    labelPlacement !== "end" && `labelPlacement="${labelPlacement}"`,
    ...flagOrder.filter((flag) => flags[flag]),
  ].filter(Boolean);

  const code = `import { Switch } from "@gem-org/gem-system";

export function Example() {
  return (
    <Switch
${attrs.map((attr) => `      ${attr}`).join("\n")}
    />
  );
}`;

  const selects = [
    { id: "size", value: size, options: switchSizes, onChange: pick<SwitchSize>(setSize) },
    { id: "tone", value: tone, options: switchTones, onChange: pick<SwitchTone>(setTone) },
    {
      id: "labelPlacement",
      value: labelPlacement,
      options: switchLabelPlacements,
      onChange: pick<SwitchLabelPlacement>(setLabelPlacement),
    },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="switch-playground">
        {selects.map((select) => (
          <div key={select.id} className="switch-playground__field">
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
        <div className="switch-playground__flags">
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
        <Switch
          key={String(flags.defaultChecked)}
          label={label}
          helperText={helperText}
          size={size}
          tone={tone}
          labelPlacement={labelPlacement}
          defaultChecked={flags.defaultChecked}
          isInvalid={flags.isInvalid}
          isDisabled={flags.isDisabled}
          isRequired={flags.isRequired}
        />
      </DemoBlock>
    </DocsSection>
  );
}
