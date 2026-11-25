import { useState } from "react";
import { Alert, Button, Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { ALERT_RADII, ALERT_SIZES, ALERT_STATUSES, ALERT_VARIANTS } from "./examples/demo.ts";

const booleanOptions = ["false", "true"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

export function AlertPlayground() {
  const { t } = useTranslation("alert");
  const common = t("common", { returnObjects: true });
  const texts = t("playground.texts", { returnObjects: true });
  const [open, setOpen] = useState(true);
  const [status, setStatus] = useState<string>("info");
  const [variant, setVariant] = useState<string>("soft");
  const [size, setSize] = useState<string>("md");
  const [radius, setRadius] = useState<string>("md");
  const [hideIcon, setHideIcon] = useState<string>("false");
  const [isClosable, setIsClosable] = useState<string>("false");

  const copy = common.copy[status as (typeof ALERT_STATUSES)[number]];

  const attrs = [
    status !== "info" && `status="${status}"`,
    variant !== "soft" && `variant="${variant}"`,
    size !== "md" && `size="${size}"`,
    radius !== "md" && `radius="${radius}"`,
    `title="${copy.title}"`,
    hideIcon === "true" && "hideIcon",
    isClosable === "true" && "isClosable",
    isClosable === "true" && `closeAriaLabel="${common.closeLabel}"`,
  ].filter(Boolean);

  const code = `import { Alert } from "@gem-org/gem-system";

export function Example() {
  return (
    <Alert
      ${attrs.join("\n      ")}
    >
      ${copy.description}
    </Alert>
  );
}`;

  const selects = [
    { id: "status", value: status, options: ALERT_STATUSES, onChange: pick(setStatus) },
    { id: "variant", value: variant, options: ALERT_VARIANTS, onChange: pick(setVariant) },
    { id: "size", value: size, options: ALERT_SIZES, onChange: pick(setSize) },
    { id: "radius", value: radius, options: ALERT_RADII, onChange: pick(setRadius) },
    { id: "hideIcon", value: hideIcon, options: booleanOptions, onChange: pick(setHideIcon) },
    { id: "isClosable", value: isClosable, options: booleanOptions, onChange: pick(setIsClosable) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="alert-playground">
        {selects.map((select) => (
          <div key={select.id} className="alert-playground__field">
            <Typography variant="label">{select.id}</Typography>
            <Select
              aria-label={select.id}
              options={toOptions(select.options)}
              value={select.value}
              onChange={select.onChange}
              searchable={false}
            />
          </div>
        ))}
      </div>

      <DemoBlock code={code} label="Example.tsx">
        {open ? (
          <Alert
            status={status as (typeof ALERT_STATUSES)[number]}
            variant={variant as (typeof ALERT_VARIANTS)[number]}
            size={size as (typeof ALERT_SIZES)[number]}
            radius={radius as (typeof ALERT_RADII)[number]}
            title={copy.title}
            hideIcon={hideIcon === "true"}
            isClosable={isClosable === "true"}
            closeAriaLabel={common.closeLabel}
            open={open}
            onClose={() => setOpen(false)}
          >
            {copy.description}
          </Alert>
        ) : (
          <Button variant="secondary" size="sm" onClick={() => setOpen(true)}>
            {texts.show}
          </Button>
        )}
      </DemoBlock>
    </DocsSection>
  );
}
