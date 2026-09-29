import { useState } from "react";
import {
  Select,
  Switch,
  Textarea,
  Typography,
  type SelectValue,
  type TextareaBorder,
  type TextareaLabelPlacement,
  type TextareaResize,
  type TextareaSize,
} from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { textareaBorders, textareaLabelPlacements, textareaResizes, textareaSizes } from "./textareaDocs.ts";

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

type Flags = {
  showCount: boolean;
  isInvalid: boolean;
  isDisabled: boolean;
  isRequired: boolean;
};

const flagDefaults: Flags = { showCount: false, isInvalid: false, isDisabled: false, isRequired: false };
const flagOrder = Object.keys(flagDefaults) as (keyof Flags)[];

const pick =
  <T extends string>(setter: (value: T) => void) =>
  (value: SelectValue) => {
    if (typeof value === "string") setter(value as T);
  };

export function TextareaPlayground() {
  const { t } = useTranslation("textarea");
  const [size, setSize] = useState<TextareaSize>("md");
  const [border, setBorder] = useState<TextareaBorder>("default");
  const [labelPlacement, setLabelPlacement] = useState<TextareaLabelPlacement>("above");
  const [resize, setResize] = useState<TextareaResize>("vertical");
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
    resize !== "vertical" && `resize="${resize}"`,
    ...flagOrder.filter((flag) => flags[flag]),
  ].filter(Boolean);

  const code = `import { Textarea } from "@gem-org/gem-system";

export function Example() {
  return (
    <Textarea
${attrs.map((attr) => `      ${attr}`).join("\n")}
    />
  );
}`;

  const selects = [
    { id: "size", value: size, options: textareaSizes, onChange: pick<TextareaSize>(setSize) },
    { id: "border", value: border, options: textareaBorders, onChange: pick<TextareaBorder>(setBorder) },
    {
      id: "labelPlacement",
      value: labelPlacement,
      options: textareaLabelPlacements,
      onChange: pick<TextareaLabelPlacement>(setLabelPlacement),
    },
    { id: "resize", value: resize, options: textareaResizes, onChange: pick<TextareaResize>(setResize) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="textarea-playground">
        {selects.map((select) => (
          <div key={select.id} className="textarea-playground__field">
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
        <div className="textarea-playground__flags">
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
        <div className="textarea-demo">
          <Textarea
            key={resize}
            label={label}
            placeholder={placeholder}
            helperText={helperText}
            size={size}
            border={border}
            labelPlacement={labelPlacement}
            resize={resize}
            {...flags}
          />
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
