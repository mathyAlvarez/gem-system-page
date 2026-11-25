import { useState } from "react";
import {
  DatePicker,
  Select,
  Switch,
  Typography,
  type DatePickerBorder,
  type DatePickerLabelPlacement,
  type DatePickerSize,
  type SelectValue,
} from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { datePickerBorders, datePickerSizes } from "./datePickerDocs.ts";

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));
const placements: DatePickerLabelPlacement[] = ["outline", "above"];
const locales = ["en", "es", "pt"];

type Flags = {
  range: boolean;
  showTime: boolean;
  clearable: boolean;
  isLoading: boolean;
  isDisabled: boolean;
  isRequired: boolean;
};

const flagDefaults: Flags = {
  range: false,
  showTime: false,
  clearable: false,
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

export function DatePickerPlayground() {
  const { t } = useTranslation("datePicker");
  const [size, setSize] = useState<DatePickerSize>("md");
  const [border, setBorder] = useState<DatePickerBorder>("default");
  const [labelPlacement, setLabelPlacement] = useState<DatePickerLabelPlacement>("outline");
  const [locale, setLocale] = useState("en");
  const [flags, setFlags] = useState<Flags>(flagDefaults);

  const label = t("playground.label");
  const placeholder = t("playground.placeholder");
  const helperText = t("playground.helperText");

  const attrs = [
    `label=${JSON.stringify(label)}`,
    `placeholder=${JSON.stringify(placeholder)}`,
    `helperText=${JSON.stringify(helperText)}`,
    size !== "md" && `size="${size}"`,
    border !== "default" && `border="${border}"`,
    labelPlacement !== "outline" && `labelPlacement="${labelPlacement}"`,
    locale !== "en" && `locale="${locale}"`,
    ...flagOrder.filter((flag) => flags[flag]),
  ].filter(Boolean);

  const code = `import { DatePicker } from "@gem-org/gem-system";

export function Example() {
  return (
    <DatePicker
${attrs.map((attr) => `      ${attr}`).join("\n")}
    />
  );
}`;

  const selects = [
    { id: "size", value: size, options: datePickerSizes, onChange: pick<DatePickerSize>(setSize) },
    {
      id: "border",
      value: border,
      options: datePickerBorders,
      onChange: pick<DatePickerBorder>(setBorder),
    },
    {
      id: "labelPlacement",
      value: labelPlacement,
      options: placements,
      onChange: pick<DatePickerLabelPlacement>(setLabelPlacement),
    },
    { id: "locale", value: locale, options: locales, onChange: pick<string>(setLocale) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="datepicker-playground">
        {selects.map((select) => (
          <div key={select.id} className="datepicker-playground__field">
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
        <div className="datepicker-playground__flags">
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

      <DemoBlock code={code} label="Example.tsx" overflow>
        <div className="datepicker-demo">
          <DatePicker
            key={flags.range ? "range" : "single"}
            label={label}
            placeholder={placeholder}
            helperText={helperText}
            size={size}
            border={border}
            labelPlacement={labelPlacement}
            locale={locale}
            {...flags}
          />
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
