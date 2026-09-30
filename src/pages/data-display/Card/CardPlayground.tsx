import { useState } from "react";
import { Button, Card, Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { CARD_RADII, CARD_SHADOWS, CARD_SIZES } from "./examples/demo.ts";
import "./examples/card-demo.css";

const booleanOptions = ["true", "false"] as const;
const roundedOptions = ["false", "true", "12", '"1.25rem"'] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

const toRounded = (value: string) => {
  if (value === "true") return true;
  if (value === "false") return false;
  if (value === "12") return 12;
  return "1.25rem";
};

export function CardPlayground() {
  const { t } = useTranslation("card");
  const common = t("common", { returnObjects: true });
  const [size, setSize] = useState<string>("md");
  const [radius, setRadius] = useState<string>("md");
  const [shadow, setShadow] = useState<string>("none");
  const [bordered, setBordered] = useState<string>("true");
  const [rounded, setRounded] = useState<string>("false");
  const [expandable, setExpandable] = useState<string>("false");

  const attrs = [
    size !== "md" && `size="${size}"`,
    radius !== "md" && `radius="${radius}"`,
    shadow !== "none" && `shadow="${shadow}"`,
    bordered === "false" && "bordered={false}",
    rounded === "true" && "rounded",
    rounded === "12" && "rounded={12}",
    rounded === '"1.25rem"' && 'rounded="1.25rem"',
    expandable === "true" && "expandable",
    `title="${common.title}"`,
    `subtitle="${common.subtitle}"`,
  ].filter(Boolean);

  const code = `import { Button, Card } from "@gem-org/gem-system";

<Card
  ${attrs.join("\n  ")}
  footer={<Button size="sm">${common.save}</Button>}
>
  ${common.body}
</Card>`;

  const selects = [
    { id: "size", value: size, options: CARD_SIZES, onChange: pick(setSize) },
    { id: "radius", value: radius, options: CARD_RADII, onChange: pick(setRadius) },
    { id: "shadow", value: shadow, options: CARD_SHADOWS, onChange: pick(setShadow) },
    { id: "bordered", value: bordered, options: booleanOptions, onChange: pick(setBordered) },
    { id: "rounded", value: rounded, options: roundedOptions, onChange: pick(setRounded) },
    { id: "expandable", value: expandable, options: booleanOptions, onChange: pick(setExpandable) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="card-playground">
        {selects.map((select) => (
          <div key={select.id} className="card-playground__field">
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
        <div className="card-demo">
          <Card
            size={size as (typeof CARD_SIZES)[number]}
            radius={radius as (typeof CARD_RADII)[number]}
            shadow={shadow as (typeof CARD_SHADOWS)[number]}
            bordered={bordered === "true"}
            rounded={toRounded(rounded)}
            expandable={expandable === "true"}
            title={common.title}
            subtitle={common.subtitle}
            footer={<Button size="sm">{common.save}</Button>}
          >
            {common.body}
          </Card>
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
