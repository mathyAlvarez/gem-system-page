import { useState } from "react";
import { Accordion, Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { ACCORDION_SIZES, ACCORDION_TYPES, ACCORDION_VARIANTS, toItems } from "./examples/demo.ts";
import "./examples/accordion-demo.css";

const booleanOptions = ["true", "false"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

export function AccordionPlayground() {
  const { t } = useTranslation("accordion");
  const common = t("common", { returnObjects: true });
  const [type, setType] = useState<string>("multiple");
  const [variant, setVariant] = useState<string>("connected");
  const [size, setSize] = useState<string>("md");
  const [collapsible, setCollapsible] = useState<string>("true");
  const [isDisabled, setIsDisabled] = useState<string>("false");

  const attrs = [
    type !== "multiple" && `type="${type}"`,
    variant !== "connected" && `variant="${variant}"`,
    size !== "md" && `size="${size}"`,
    collapsible === "false" && "collapsible={false}",
    isDisabled === "true" && "isDisabled",
    'defaultValue="billing"',
    "items={items}",
  ].filter(Boolean);

  const itemsCode = common.sections
    .map(
      (section) =>
        `  {\n    id: "${section.id}",\n    title: "${section.title}",${
          section.subtitle ? `\n    subtitle: "${section.subtitle}",` : ""
        }\n    content: "${section.content}",\n  },`,
    )
    .join("\n");

  const code = `import { Accordion, type AccordionItem } from "@gem-org/gem-system";

const items: AccordionItem[] = [
${itemsCode}
];

<Accordion
  ${attrs.join("\n  ")}
/>`;

  const selects = [
    { id: "type", value: type, options: ACCORDION_TYPES, onChange: pick(setType) },
    { id: "variant", value: variant, options: ACCORDION_VARIANTS, onChange: pick(setVariant) },
    { id: "size", value: size, options: ACCORDION_SIZES, onChange: pick(setSize) },
    {
      id: "collapsible",
      value: collapsible,
      options: booleanOptions,
      onChange: pick(setCollapsible),
    },
    { id: "isDisabled", value: isDisabled, options: booleanOptions, onChange: pick(setIsDisabled) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="accordion-playground">
        {selects.map((select) => (
          <div key={select.id} className="accordion-playground__field">
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
        <div className="accordion-demo">
          <Accordion
            key={`${type}-${collapsible}`}
            type={type as (typeof ACCORDION_TYPES)[number]}
            variant={variant as (typeof ACCORDION_VARIANTS)[number]}
            size={size as (typeof ACCORDION_SIZES)[number]}
            collapsible={collapsible === "true"}
            isDisabled={isDisabled === "true"}
            defaultValue="billing"
            items={toItems(common.sections)}
          />
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
