import { useState } from "react";
import {
  Button,
  Select,
  Switch,
  Typography,
  type ButtonShadows,
  type ButtonSize,
  type ButtonVariant,
  type SelectValue,
} from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { buttonShadows, buttonSizes, buttonVariants } from "./buttonDocs.ts";

const toOptions = (values: readonly string[]) =>
  values.map((value) => ({ value, label: value }));

const variantOptions = toOptions(buttonVariants);
const sizeOptions = toOptions(buttonSizes);
const shadowOptions = toOptions(buttonShadows);

type Flags = {
  hovered: boolean;
  isLoading: boolean;
  rounded: boolean;
  disabled: boolean;
};

const flagDefaults: Flags = { hovered: true, isLoading: false, rounded: false, disabled: false };
const flagOrder = Object.keys(flagDefaults) as (keyof Flags)[];

export function ButtonPlayground() {
  const { t } = useTranslation("button");
  const [variant, setVariant] = useState<ButtonVariant>("primary");
  const [size, setSize] = useState<ButtonSize>("md");
  const [shadow, setShadow] = useState<ButtonShadows>("none");
  const [flags, setFlags] = useState<Flags>(flagDefaults);

  const pick =
    <T extends string>(setter: (value: T) => void) =>
    (value: SelectValue) => {
      if (typeof value === "string") setter(value as T);
    };

  const label = t("playground.defaultLabel");

  const attrs = [
    variant !== "primary" && `variant="${variant}"`,
    size !== "md" && `size="${size}"`,
    shadow !== "none" && `shadow="${shadow}"`,
    ...flagOrder
      .filter((flag) => flags[flag] !== flagDefaults[flag])
      .map((flag) => (flags[flag] ? flag : `${flag}={false}`)),
  ].filter(Boolean);

  const code = `import { Button } from "@gem-org/gem-system";

export function Example() {
  return (
    <Button${attrs.length ? ` ${attrs.join(" ")}` : ""}>
      {${JSON.stringify(label)}}
    </Button>
  );
}`;

  const selects = [
    { id: "variant", options: variantOptions, value: variant, onChange: pick<ButtonVariant>(setVariant) },
    { id: "size", options: sizeOptions, value: size, onChange: pick<ButtonSize>(setSize) },
    { id: "shadow", options: shadowOptions, value: shadow, onChange: pick<ButtonShadows>(setShadow) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="button-playground">
        <div className="button-playground__controls">
          {selects.map((select) => (
            <div key={select.id} className="button-playground__field">
              <Typography variant="label">{t(`playground.${select.id}`)}</Typography>
              <Select
                aria-label={t(`playground.${select.id}`)}
                options={select.options}
                value={select.value}
                onChange={select.onChange}
                searchable={false}
              />
            </div>
          ))}
          <div className="button-playground__flags">
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

        <DemoBlock code={code} label="Example.tsx">
          <Button
            variant={variant}
            size={size}
            shadow={shadow}
            hovered={flags.hovered}
            isLoading={flags.isLoading}
            rounded={flags.rounded}
            disabled={flags.disabled}
          >
            {label}
          </Button>
        </DemoBlock>
      </div>
    </DocsSection>
  );
}
