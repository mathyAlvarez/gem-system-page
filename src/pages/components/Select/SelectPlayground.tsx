import { useState } from "react";
import {
  Select,
  Switch,
  Typography,
  type SelectBorder,
  type SelectSize,
  type SelectValue,
} from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { selectBorders, selectSizes } from "./selectDocs.ts";

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

type Flags = {
  searchable: boolean;
  multiple: boolean;
  clearable: boolean;
  showExpand: boolean;
  isLoading: boolean;
  isInvalid: boolean;
  isDisabled: boolean;
  isRequired: boolean;
};

const flagDefaults: Flags = {
  searchable: true,
  multiple: false,
  clearable: false,
  showExpand: true,
  isLoading: false,
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

export function SelectPlayground() {
  const { t } = useTranslation("select");
  const [size, setSize] = useState<SelectSize>("md");
  const [border, setBorder] = useState<SelectBorder>("default");
  const [flags, setFlags] = useState<Flags>(flagDefaults);

  const countries = t("options.countries", { returnObjects: true });
  const label = t("playground.label");
  const placeholder = t("playground.placeholder");
  const helperText = t("playground.helperText");
  const searchPlaceholder = t("search.searchPlaceholder");
  const noResultsText = t("search.noResultsText");

  const attrs = [
    `label=${JSON.stringify(label)}`,
    "options={COUNTRIES}",
    `placeholder=${JSON.stringify(placeholder)}`,
    `helperText=${JSON.stringify(helperText)}`,
    flags.searchable && `searchPlaceholder=${JSON.stringify(searchPlaceholder)}`,
    flags.searchable && `noResultsText=${JSON.stringify(noResultsText)}`,
    size !== "md" && `size="${size}"`,
    border !== "default" && `border="${border}"`,
    ...flagOrder
      .filter((flag) => flags[flag] !== flagDefaults[flag])
      .map((flag) => (flags[flag] ? flag : `${flag}={false}`)),
  ].filter(Boolean);

  const code = `import { Select } from "@gem-org/gem-system";
import { COUNTRIES } from "./data";

export function Example() {
  return (
    <Select
${attrs.map((attr) => `      ${attr}`).join("\n")}
    />
  );
}`;

  const selects = [
    { id: "size", value: size, options: selectSizes, onChange: pick<SelectSize>(setSize) },
    { id: "border", value: border, options: selectBorders, onChange: pick<SelectBorder>(setBorder) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="select-playground">
        {selects.map((select) => (
          <div key={select.id} className="select-playground__field">
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
        <div className="select-playground__flags">
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
        <div className="select-demo">
          <Select
            key={flags.multiple ? "multiple" : "single"}
            label={label}
            options={countries}
            placeholder={placeholder}
            helperText={helperText}
            searchPlaceholder={searchPlaceholder}
            noResultsText={noResultsText}
            size={size}
            border={border}
            {...flags}
          />
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
