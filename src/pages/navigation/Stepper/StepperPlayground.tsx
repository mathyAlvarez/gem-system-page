import { useState } from "react";
import { Select, Stepper, Typography, type SelectValue } from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { setupItems } from "./examples/demo.ts";
import "./examples/stepper-demo.css";

const orientationOptions = ["horizontal", "vertical"] as const;
const sizeOptions = ["sm", "md", "lg"] as const;
const booleanOptions = ["true", "false"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

export function StepperPlayground() {
  const { t } = useTranslation("stepper");
  const texts = t("demo", { returnObjects: true });
  const [orientation, setOrientation] = useState<string>("horizontal");
  const [size, setSize] = useState<string>("md");
  const [alternativeLabel, setAlternativeLabel] = useState<string>("false");
  const [linear, setLinear] = useState<string>("true");
  const [clickable, setClickable] = useState<string>("true");
  const [showContent, setShowContent] = useState<string>("true");

  const vertical = orientation === "vertical";
  const items = setupItems(texts);

  const attrs = [
    "items={items}",
    'defaultValue="profile"',
    vertical && 'orientation="vertical"',
    size !== "md" && `size="${size}"`,
    !vertical && alternativeLabel === "true" && "alternativeLabel",
    linear === "false" && "linear={false}",
    clickable === "false" && "clickable={false}",
    showContent === "false" && "showContent={false}",
    `navLabel="${texts.navLabel}"`,
  ].filter(Boolean);

  const code = `import { Stepper, type StepperItem } from "@gem-org/gem-system";

const items: StepperItem[] = [
${items
  .map(
    (item) =>
      `  {\n    id: "${item.id}",\n    label: "${item.label}",\n    description: "${item.description}",\n    content: "${item.content}",\n  },`,
  )
  .join("\n")}
];

export function Example() {
  return (
    <Stepper
      ${attrs.join("\n      ")}
    />
  );
}`;

  const selects = [
    { id: "orientation", value: orientation, options: orientationOptions, onChange: pick(setOrientation) },
    { id: "size", value: size, options: sizeOptions, onChange: pick(setSize) },
    { id: "alternativeLabel", value: alternativeLabel, options: booleanOptions, onChange: pick(setAlternativeLabel) },
    { id: "linear", value: linear, options: booleanOptions, onChange: pick(setLinear) },
    { id: "clickable", value: clickable, options: booleanOptions, onChange: pick(setClickable) },
    { id: "showContent", value: showContent, options: booleanOptions, onChange: pick(setShowContent) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="stepper-playground">
        {selects.map((select) => (
          <div key={select.id} className="stepper-playground__field">
            <Typography variant="label">{select.id}</Typography>
            <Select
              aria-label={select.id}
              options={toOptions(select.options)}
              value={select.value}
              onChange={select.onChange}
              searchable={false}
              disabled={vertical && select.id === "alternativeLabel"}
            />
          </div>
        ))}
      </div>

      <DemoBlock code={code} label="Example.tsx" stack>
        <div className={vertical ? "stepper-demo stepper-demo--narrow" : "stepper-demo"}>
          <Stepper
            items={items}
            defaultValue="profile"
            orientation={orientation as (typeof orientationOptions)[number]}
            size={size as (typeof sizeOptions)[number]}
            alternativeLabel={alternativeLabel === "true"}
            linear={linear === "true"}
            clickable={clickable === "true"}
            showContent={showContent === "true"}
            navLabel={texts.navLabel}
          />
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
