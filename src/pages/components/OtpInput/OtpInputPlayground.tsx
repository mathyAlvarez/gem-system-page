import { useState } from "react";
import {
  OtpInput,
  Select,
  Switch,
  Typography,
  type OtpInputBorder,
  type OtpInputLabelPlacement,
  type OtpInputSize,
  type OtpInputType,
  type SelectValue,
} from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { otpInputBorders, otpInputSizes } from "./otpInputDocs.ts";

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));
const placements: OtpInputLabelPlacement[] = ["above", "outline"];
const types: OtpInputType[] = ["numeric", "alphanumeric"];
const lengths = ["4", "5", "6", "8"];

type Flags = {
  uppercase: boolean;
  mask: boolean;
  separator: boolean;
  clearable: boolean;
  isInvalid: boolean;
  isDisabled: boolean;
  isRequired: boolean;
};

const flagDefaults: Flags = {
  uppercase: true,
  mask: false,
  separator: false,
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

export function OtpInputPlayground() {
  const { t } = useTranslation("otpInput");
  const [size, setSize] = useState<OtpInputSize>("md");
  const [border, setBorder] = useState<OtpInputBorder>("default");
  const [labelPlacement, setLabelPlacement] = useState<OtpInputLabelPlacement>("above");
  const [type, setType] = useState<OtpInputType>("numeric");
  const [length, setLength] = useState("6");
  const [flags, setFlags] = useState<Flags>(flagDefaults);

  const label = t("playground.label");
  const helperText = t("playground.helperText");
  const { separator, ...rest } = flags;

  const attrs = [
    `label=${JSON.stringify(label)}`,
    `helperText=${JSON.stringify(helperText)}`,
    length !== "6" && `length={${length}}`,
    type !== "numeric" && `type="${type}"`,
    size !== "md" && `size="${size}"`,
    border !== "default" && `border="${border}"`,
    labelPlacement !== "above" && `labelPlacement="${labelPlacement}"`,
    separator && `separator="–"`,
    ...flagOrder
      .filter((flag) => flag !== "separator" && flags[flag] !== flagDefaults[flag])
      .map((flag) => (flags[flag] ? flag : `${flag}={false}`)),
  ].filter(Boolean);

  const code = `import { OtpInput } from "@gem-org/gem-system";

export function Example() {
  return (
    <OtpInput
${attrs.map((attr) => `      ${attr}`).join("\n")}
    />
  );
}`;

  const selects = [
    { id: "size", value: size, options: otpInputSizes, onChange: pick<OtpInputSize>(setSize) },
    { id: "border", value: border, options: otpInputBorders, onChange: pick<OtpInputBorder>(setBorder) },
    {
      id: "labelPlacement",
      value: labelPlacement,
      options: placements,
      onChange: pick<OtpInputLabelPlacement>(setLabelPlacement),
    },
    { id: "type", value: type, options: types, onChange: pick<OtpInputType>(setType) },
    { id: "length", value: length, options: lengths, onChange: pick<string>(setLength) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="otpinput-playground">
        {selects.map((select) => (
          <div key={select.id} className="otpinput-playground__field">
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
        <div className="otpinput-playground__flags">
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
        <div className="otpinput-demo">
          <OtpInput
            key={type}
            label={label}
            helperText={helperText}
            length={Number(length)}
            type={type}
            size={size}
            border={border}
            labelPlacement={labelPlacement}
            separator={separator ? "–" : undefined}
            {...rest}
          />
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
