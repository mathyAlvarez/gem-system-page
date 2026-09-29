import { useState } from "react";
import {
  Radio,
  RadioGroup,
  Select,
  Switch,
  Typography,
  type RadioOrientation,
  type RadioSize,
  type RadioTone,
  type SelectValue,
} from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { radioGroupOrientations, radioGroupSizes, radioGroupTones } from "./radioGroupDocs.ts";

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

type Flags = {
  isInvalid: boolean;
  isDisabled: boolean;
  isRequired: boolean;
};

const flagDefaults: Flags = { isInvalid: false, isDisabled: false, isRequired: false };
const flagOrder = Object.keys(flagDefaults) as (keyof Flags)[];
const optionIds = ["email", "sms", "push"] as const;

const pick =
  <T extends string>(setter: (value: T) => void) =>
  (value: SelectValue) => {
    if (typeof value === "string") setter(value as T);
  };

export function RadioGroupPlayground() {
  const { t } = useTranslation("radioGroup");
  const [size, setSize] = useState<RadioSize>("md");
  const [tone, setTone] = useState<RadioTone>("primary");
  const [orientation, setOrientation] = useState<RadioOrientation>("vertical");
  const [flags, setFlags] = useState<Flags>(flagDefaults);

  const label = t("playground.label");
  const helperText = t("playground.helperText");
  const options = optionIds.map((id) => ({ id, label: t(`playground.options.${id}`) }));

  const attrs = [
    'name="channel"',
    `label=${JSON.stringify(label)}`,
    `helperText=${JSON.stringify(helperText)}`,
    'defaultValue="email"',
    size !== "md" && `size="${size}"`,
    tone !== "primary" && `tone="${tone}"`,
    orientation !== "vertical" && `orientation="${orientation}"`,
    ...flagOrder.filter((flag) => flags[flag]),
  ].filter(Boolean);

  const code = `import { Radio, RadioGroup } from "@gem-org/gem-system";

export function Example() {
  return (
    <RadioGroup
${attrs.map((attr) => `      ${attr}`).join("\n")}
    >
${options.map((option) => `      <Radio value="${option.id}" label=${JSON.stringify(option.label)} />`).join("\n")}
    </RadioGroup>
  );
}`;

  const selects = [
    { id: "size", value: size, options: radioGroupSizes, onChange: pick<RadioSize>(setSize) },
    { id: "tone", value: tone, options: radioGroupTones, onChange: pick<RadioTone>(setTone) },
    {
      id: "orientation",
      value: orientation,
      options: radioGroupOrientations,
      onChange: pick<RadioOrientation>(setOrientation),
    },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="radiogroup-playground">
        {selects.map((select) => (
          <div key={select.id} className="radiogroup-playground__field">
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
        <div className="radiogroup-playground__flags">
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

      <DemoBlock code={code} label="Example.tsx" stack>
        <RadioGroup
          name="channel"
          label={label}
          helperText={helperText}
          defaultValue="email"
          size={size}
          tone={tone}
          orientation={orientation}
          {...flags}
        >
          {options.map((option) => (
            <Radio key={option.id} value={option.id} label={option.label} />
          ))}
        </RadioGroup>
      </DemoBlock>
    </DocsSection>
  );
}
