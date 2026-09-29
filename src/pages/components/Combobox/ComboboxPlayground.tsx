import { useState } from "react";
import {
  Combobox,
  Select,
  Switch,
  Typography,
  type ComboboxBorder,
  type ComboboxSize,
  type SelectValue,
} from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { comboboxBorders, comboboxSizes } from "./comboboxDocs.ts";
import { COUNTRIES } from "./examples/data.ts";

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

type Flags = {
  multiple: boolean;
  clearable: boolean;
  allowsCustomValue: boolean;
  showExpand: boolean;
  isLoading: boolean;
  isDisabled: boolean;
  isRequired: boolean;
};

const flagDefaults: Flags = {
  multiple: false,
  clearable: true,
  allowsCustomValue: false,
  showExpand: false,
  isLoading: false,
  isDisabled: false,
  isRequired: false,
};
const flagOrder = Object.keys(flagDefaults) as (keyof Flags)[];

const pick =
  <T extends string>(setter: (value: T) => void) =>
  (value: SelectValue) => {
    if (typeof value === "string") setter(value as T);
  };

export function ComboboxPlayground() {
  const { t } = useTranslation("combobox");
  const [size, setSize] = useState<ComboboxSize>("md");
  const [border, setBorder] = useState<ComboboxBorder>("default");
  const [flags, setFlags] = useState<Flags>(flagDefaults);

  const label = t("playground.label");
  const placeholder = t("playground.placeholder");
  const helperText = t("playground.helperText");

  const attrs = [
    `label=${JSON.stringify(label)}`,
    "options={COUNTRIES}",
    `placeholder=${JSON.stringify(placeholder)}`,
    `helperText=${JSON.stringify(helperText)}`,
    size !== "md" && `size="${size}"`,
    border !== "default" && `border="${border}"`,
    ...flagOrder
      .filter((flag) => flags[flag] !== flagDefaults[flag])
      .map((flag) => (flags[flag] ? flag : `${flag}={false}`)),
  ].filter(Boolean);

  const code = `import { Combobox } from "@gem-org/gem-system";
import { COUNTRIES } from "./data";

export function Example() {
  return (
    <Combobox
${attrs.map((attr) => `      ${attr}`).join("\n")}
    />
  );
}`;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="combobox-playground">
        <div className="combobox-playground__field">
          <Typography variant="label">{t("playground.size")}</Typography>
          <Select
            aria-label={t("playground.size")}
            options={toOptions(comboboxSizes)}
            value={size}
            onChange={pick<ComboboxSize>(setSize)}
            searchable={false}
          />
        </div>
        <div className="combobox-playground__field">
          <Typography variant="label">{t("playground.border")}</Typography>
          <Select
            aria-label={t("playground.border")}
            options={toOptions(comboboxBorders)}
            value={border}
            onChange={pick<ComboboxBorder>(setBorder)}
            searchable={false}
          />
        </div>
        <div className="combobox-playground__flags">
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

      <DemoBlock code={code} label="Example.tsx" overflow>
        <div className="combobox-playground__preview">
          <Combobox
            key={flags.multiple ? "multiple" : "single"}
            label={label}
            options={COUNTRIES}
            placeholder={placeholder}
            helperText={helperText}
            size={size}
            border={border}
            {...flags}
          />
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
