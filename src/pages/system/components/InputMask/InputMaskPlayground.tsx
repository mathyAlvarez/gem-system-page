import { useState } from "react";
import {
  InputMask,
  Select,
  Switch,
  Typography,
  type InputMaskBorder,
  type InputMaskLabelPlacement,
  type InputMaskPreset,
  type InputMaskSize,
  type SelectValue,
} from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { inputMaskBorders, inputMaskPresets, inputMaskSizes } from "./inputMaskDocs.ts";

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));
const placements: InputMaskLabelPlacement[] = ["above", "outline"];

type Flags = {
  clearable: boolean;
  isInvalid: boolean;
  isDisabled: boolean;
  isRequired: boolean;
};

const flagDefaults: Flags = {
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

export function InputMaskPlayground() {
  const { t } = useTranslation("inputMask");
  const [preset, setPreset] = useState<InputMaskPreset>("date");
  const [size, setSize] = useState<InputMaskSize>("md");
  const [border, setBorder] = useState<InputMaskBorder>("default");
  const [labelPlacement, setLabelPlacement] = useState<InputMaskLabelPlacement>("above");
  const [flags, setFlags] = useState<Flags>(flagDefaults);

  const label = t("playground.label");
  const helperText = t("playground.helperText");

  const attrs = [
    `label=${JSON.stringify(label)}`,
    `preset="${preset}"`,
    `helperText=${JSON.stringify(helperText)}`,
    size !== "md" && `size="${size}"`,
    border !== "default" && `border="${border}"`,
    labelPlacement !== "above" && `labelPlacement="${labelPlacement}"`,
    ...flagOrder.filter((flag) => flags[flag]),
  ].filter(Boolean);

  const code = `import { InputMask } from "@gem-org/gem-system";

export function Example() {
  return (
    <InputMask
${attrs.map((attr) => `      ${attr}`).join("\n")}
    />
  );
}`;

  const selects = [
    {
      id: "preset",
      value: preset,
      options: inputMaskPresets,
      onChange: pick<InputMaskPreset>(setPreset),
    },
    { id: "size", value: size, options: inputMaskSizes, onChange: pick<InputMaskSize>(setSize) },
    {
      id: "border",
      value: border,
      options: inputMaskBorders,
      onChange: pick<InputMaskBorder>(setBorder),
    },
    {
      id: "labelPlacement",
      value: labelPlacement,
      options: placements,
      onChange: pick<InputMaskLabelPlacement>(setLabelPlacement),
    },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="inputmask-playground">
        {selects.map((select) => (
          <div key={select.id} className="inputmask-playground__field">
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
        <div className="inputmask-playground__flags">
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
        <div className="inputmask-demo">
          <InputMask
            key={preset}
            label={label}
            preset={preset}
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
