import { useState } from "react";
import {
  InputPassword,
  Select,
  Switch,
  Typography,
  type InputPasswordBorder,
  type InputPasswordLabelPlacement,
  type InputPasswordSize,
  type SelectValue,
} from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { inputPasswordBorders, inputPasswordSizes } from "./inputPasswordDocs.ts";

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));
const placements: InputPasswordLabelPlacement[] = ["above", "outline"];
const maskOptions = ["native", "●", "*"];

type Flags = {
  showToggle: boolean;
  isInvalid: boolean;
  isDisabled: boolean;
  isRequired: boolean;
};

const flagDefaults: Flags = {
  showToggle: true,
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

export function InputPasswordPlayground() {
  const { t } = useTranslation("inputPassword");
  const [size, setSize] = useState<InputPasswordSize>("md");
  const [border, setBorder] = useState<InputPasswordBorder>("default");
  const [labelPlacement, setLabelPlacement] = useState<InputPasswordLabelPlacement>("above");
  const [mask, setMask] = useState("native");
  const [flags, setFlags] = useState<Flags>(flagDefaults);

  const label = t("playground.label");
  const placeholder = t("playground.placeholder");
  const helperText = t("playground.helperText");
  const maskCharacter = mask === "native" ? undefined : mask;

  const attrs = [
    `label=${JSON.stringify(label)}`,
    `placeholder=${JSON.stringify(placeholder)}`,
    `helperText=${JSON.stringify(helperText)}`,
    size !== "md" && `size="${size}"`,
    border !== "default" && `border="${border}"`,
    labelPlacement !== "above" && `labelPlacement="${labelPlacement}"`,
    maskCharacter && `maskCharacter="${maskCharacter}"`,
    ...flagOrder
      .filter((flag) => flags[flag] !== flagDefaults[flag])
      .map((flag) => (flags[flag] ? flag : `${flag}={false}`)),
  ].filter(Boolean);

  const code = `import { InputPassword } from "@gem-org/gem-system";

export function Example() {
  return (
    <InputPassword
${attrs.map((attr) => `      ${attr}`).join("\n")}
    />
  );
}`;

  const selects = [
    { id: "size", value: size, options: inputPasswordSizes, onChange: pick<InputPasswordSize>(setSize) },
    { id: "border", value: border, options: inputPasswordBorders, onChange: pick<InputPasswordBorder>(setBorder) },
    {
      id: "labelPlacement",
      value: labelPlacement,
      options: placements,
      onChange: pick<InputPasswordLabelPlacement>(setLabelPlacement),
    },
    { id: "maskCharacter", value: mask, options: maskOptions, onChange: pick<string>(setMask) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="inputpassword-playground">
        {selects.map((select) => (
          <div key={select.id} className="inputpassword-playground__field">
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
        <div className="inputpassword-playground__flags">
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
        <div className="inputpassword-demo">
          <InputPassword
            key={mask}
            label={label}
            placeholder={placeholder}
            helperText={helperText}
            size={size}
            border={border}
            labelPlacement={labelPlacement}
            maskCharacter={maskCharacter}
            {...flags}
          />
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
