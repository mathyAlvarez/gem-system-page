import { useState } from "react";
import {
  InputSearch,
  Select,
  Switch,
  Typography,
  type InputSearchBorder as Border,
  type InputSearchLabelPlacement as LabelPlacement,
  type InputSearchSize as Size,
  type SelectValue,
} from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { inputSearchBorders, inputSearchSizes } from "./inputSearchDocs.ts";

type InputSearchBorder = NonNullable<Border>;
type InputSearchLabelPlacement = NonNullable<LabelPlacement>;
type InputSearchSize = NonNullable<Size>;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));
const placements: InputSearchLabelPlacement[] = ["above", "outline"];

type Flags = {
  clearable: boolean;
  isInvalid: boolean;
  isDisabled: boolean;
  isRequired: boolean;
};

const flagDefaults: Flags = {
  clearable: true,
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

export function InputSearchPlayground() {
  const { t } = useTranslation("inputSearch");
  const [size, setSize] = useState<InputSearchSize>("md");
  const [border, setBorder] = useState<InputSearchBorder>("default");
  const [labelPlacement, setLabelPlacement] = useState<InputSearchLabelPlacement>("above");
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
    labelPlacement !== "above" && `labelPlacement="${labelPlacement}"`,
    ...flagOrder
      .filter((flag) => flags[flag] !== flagDefaults[flag])
      .map((flag) => (flags[flag] ? flag : `${flag}={false}`)),
  ].filter(Boolean);

  const code = `import { InputSearch } from "@gem-org/gem-system";

export function Example() {
  return (
    <InputSearch
${attrs.map((attr) => `      ${attr}`).join("\n")}
    />
  );
}`;

  const selects = [
    { id: "size", value: size, options: inputSearchSizes, onChange: pick<InputSearchSize>(setSize) },
    { id: "border", value: border, options: inputSearchBorders, onChange: pick<InputSearchBorder>(setBorder) },
    {
      id: "labelPlacement",
      value: labelPlacement,
      options: placements,
      onChange: pick<InputSearchLabelPlacement>(setLabelPlacement),
    },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="inputsearch-playground">
        {selects.map((select) => (
          <div key={select.id} className="inputsearch-playground__field">
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
        <div className="inputsearch-playground__flags">
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
        <div className="inputsearch-demo">
          <InputSearch
            label={label}
            placeholder={placeholder}
            helperText={helperText}
            size={size}
            border={border}
            labelPlacement={labelPlacement}
            {...flags}
          />
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
