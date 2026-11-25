import { useState } from "react";
import {
  Checkbox,
  Select,
  Switch,
  Typography,
  type CheckboxSize,
  type CheckboxTone,
  type SelectValue,
} from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { checkboxSizes, checkboxTones } from "./checkboxDocs.ts";

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

type Flags = {
  rounded: boolean;
  indeterminate: boolean;
  isDisabled: boolean;
  isRequired: boolean;
};

const flagDefaults: Flags = {
  rounded: false,
  indeterminate: false,
  isDisabled: false,
  isRequired: false,
};
const flagOrder = Object.keys(flagDefaults) as (keyof Flags)[];

const pick =
  <T extends string>(setter: (value: T) => void) =>
  (value: SelectValue) => {
    if (typeof value === "string") setter(value as T);
  };

export function CheckboxPlayground() {
  const { t } = useTranslation("checkbox");
  const [size, setSize] = useState<CheckboxSize>("md");
  const [tone, setTone] = useState<CheckboxTone>("primary");
  const [flags, setFlags] = useState<Flags>(flagDefaults);

  const label = t("playground.label");
  const helperText = t("playground.helperText");

  const attrs = [
    `label=${JSON.stringify(label)}`,
    `helperText=${JSON.stringify(helperText)}`,
    size !== "md" && `size="${size}"`,
    tone !== "primary" && `tone="${tone}"`,
    ...flagOrder.filter((flag) => flags[flag]),
    "defaultChecked",
  ].filter(Boolean);

  const code = `import { Checkbox } from "@gem-org/gem-system";

export function Example() {
  return (
    <Checkbox
${attrs.map((attr) => `      ${attr}`).join("\n")}
    />
  );
}`;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="checkbox-playground">
        <div className="checkbox-playground__field">
          <Typography variant="label">{t("playground.size")}</Typography>
          <Select
            aria-label={t("playground.size")}
            options={toOptions(checkboxSizes)}
            value={size}
            onChange={pick<CheckboxSize>(setSize)}
            searchable={false}
          />
        </div>
        <div className="checkbox-playground__field">
          <Typography variant="label">{t("playground.tone")}</Typography>
          <Select
            aria-label={t("playground.tone")}
            options={toOptions(checkboxTones)}
            value={tone}
            onChange={pick<CheckboxTone>(setTone)}
            searchable={false}
          />
        </div>
        <div className="checkbox-playground__flags">
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
        <Checkbox
          label={label}
          helperText={helperText}
          size={size}
          tone={tone}
          rounded={flags.rounded}
          indeterminate={flags.indeterminate}
          isDisabled={flags.isDisabled}
          isRequired={flags.isRequired}
          defaultChecked
        />
      </DemoBlock>
    </DocsSection>
  );
}
