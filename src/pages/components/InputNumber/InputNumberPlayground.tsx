import { useState } from "react";
import {
  InputNumber,
  Select,
  Switch,
  Typography,
  type InputNumberBorder,
  type InputNumberLabelPlacement,
  type InputNumberSize,
  type SelectValue,
} from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { inputNumberBorders, inputNumberSizes } from "./inputNumberDocs.ts";

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));
const placements: InputNumberLabelPlacement[] = ["above", "outline"];

type Flags = {
  showSteppers: boolean;
  additionButtons: boolean;
  clearable: boolean;
  isInvalid: boolean;
  isDisabled: boolean;
  isRequired: boolean;
};

const flagDefaults: Flags = {
  showSteppers: true,
  additionButtons: false,
  clearable: false,
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

export function InputNumberPlayground() {
  const { t } = useTranslation("inputNumber");
  const [size, setSize] = useState<InputNumberSize>("md");
  const [border, setBorder] = useState<InputNumberBorder>("default");
  const [labelPlacement, setLabelPlacement] = useState<InputNumberLabelPlacement>("above");
  const [flags, setFlags] = useState<Flags>(flagDefaults);

  const label = t("playground.label");
  const helperText = t("playground.helperText");

  const attrs = [
    `label=${JSON.stringify(label)}`,
    "defaultValue={1}",
    `helperText=${JSON.stringify(helperText)}`,
    size !== "md" && `size="${size}"`,
    border !== "default" && `border="${border}"`,
    labelPlacement !== "above" && `labelPlacement="${labelPlacement}"`,
    ...flagOrder
      .filter((flag) => flags[flag] !== flagDefaults[flag])
      .map((flag) => (flags[flag] ? flag : `${flag}={false}`)),
  ].filter(Boolean);

  const code = `import { InputNumber } from "@gem-org/gem-system";

export function Example() {
  return (
    <InputNumber
${attrs.map((attr) => `      ${attr}`).join("\n")}
    />
  );
}`;

  const selects = [
    { id: "size", value: size, options: inputNumberSizes, onChange: pick<InputNumberSize>(setSize) },
    { id: "border", value: border, options: inputNumberBorders, onChange: pick<InputNumberBorder>(setBorder) },
    {
      id: "labelPlacement",
      value: labelPlacement,
      options: placements,
      onChange: pick<InputNumberLabelPlacement>(setLabelPlacement),
    },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="inputnumber-playground">
        {selects.map((select) => (
          <div key={select.id} className="inputnumber-playground__field">
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
        <div className="inputnumber-playground__flags">
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
        <div className="inputnumber-demo">
          <InputNumber
            label={label}
            defaultValue={1}
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
