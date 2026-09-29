import { useState } from "react";
import {
  InputText,
  Select,
  Switch,
  Typography,
  type InputTextBorder,
  type InputTextLabelPlacement,
  type InputTextSize,
  type SelectValue,
} from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { inputTextBorders, inputTextSizes, inputTextTypes } from "./inputTextDocs.ts";

type InputTextType = (typeof inputTextTypes)[number];

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));
const placements: InputTextLabelPlacement[] = ["above", "outline"];

type Flags = {
  uppercase: boolean;
  isInvalid: boolean;
  isDisabled: boolean;
  isRequired: boolean;
};

const flagDefaults: Flags = {
  uppercase: false,
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

export function InputTextPlayground() {
  const { t } = useTranslation("inputText");
  const [size, setSize] = useState<InputTextSize>("md");
  const [border, setBorder] = useState<InputTextBorder>("default");
  const [labelPlacement, setLabelPlacement] = useState<InputTextLabelPlacement>("above");
  const [type, setType] = useState<InputTextType>("text");
  const [flags, setFlags] = useState<Flags>(flagDefaults);

  const label = t("playground.label");
  const placeholder = t("playground.placeholder");
  const helperText = t("playground.helperText");

  const attrs = [
    `label=${JSON.stringify(label)}`,
    `placeholder=${JSON.stringify(placeholder)}`,
    `helperText=${JSON.stringify(helperText)}`,
    type !== "text" && `type="${type}"`,
    size !== "md" && `size="${size}"`,
    border !== "default" && `border="${border}"`,
    labelPlacement !== "above" && `labelPlacement="${labelPlacement}"`,
    ...flagOrder.filter((flag) => flags[flag]),
  ].filter(Boolean);

  const code = `import { InputText } from "@gem-org/gem-system";

export function Example() {
  return (
    <InputText
${attrs.map((attr) => `      ${attr}`).join("\n")}
    />
  );
}`;

  const selects = [
    { id: "size", value: size, options: inputTextSizes, onChange: pick<InputTextSize>(setSize) },
    { id: "border", value: border, options: inputTextBorders, onChange: pick<InputTextBorder>(setBorder) },
    {
      id: "labelPlacement",
      value: labelPlacement,
      options: placements,
      onChange: pick<InputTextLabelPlacement>(setLabelPlacement),
    },
    { id: "type", value: type, options: inputTextTypes, onChange: pick<InputTextType>(setType) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="inputtext-playground">
        {selects.map((select) => (
          <div key={select.id} className="inputtext-playground__field">
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
        <div className="inputtext-playground__flags">
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
        <div className="inputtext-demo">
          <InputText
            label={label}
            placeholder={placeholder}
            helperText={helperText}
            type={type}
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
