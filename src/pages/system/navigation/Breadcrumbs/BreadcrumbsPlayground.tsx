import { useState } from "react";
import {
  Breadcrumbs,
  Select,
  Typography,
  type BreadcrumbsSize,
  type SelectValue,
} from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { baseItems, longItems } from "./examples/demo.ts";
import { breadcrumbSizes } from "./breadcrumbsDocs.ts";

const trailOptions = ["short", "long"] as const;
const separatorOptions = ["chevron", "/", "·", "→"] as const;
const maxItemsOptions = ["none", "3", "4"] as const;
const countOptions = ["1", "2"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

export function BreadcrumbsPlayground() {
  const { t } = useTranslation("breadcrumbs");
  const texts = t("demo", { returnObjects: true });
  const [trail, setTrail] = useState<string>("long");
  const [size, setSize] = useState<string>("md");
  const [separator, setSeparator] = useState<string>("chevron");
  const [maxItems, setMaxItems] = useState<string>("none");
  const [before, setBefore] = useState<string>("1");
  const [after, setAfter] = useState<string>("1");

  const items = trail === "long" ? longItems(texts) : baseItems(texts);
  const collapse = maxItems !== "none";

  const attrs = [
    "items={items}",
    size !== "md" && `size="${size}"`,
    separator !== "chevron" && `separator="${separator}"`,
    collapse && `maxItems={${maxItems}}`,
    collapse && before !== "1" && `itemsBeforeCollapse={${before}}`,
    collapse && after !== "1" && `itemsAfterCollapse={${after}}`,
    `navLabel="${texts.navLabel}"`,
    collapse && `overflowLabel="${texts.overflowLabel}"`,
  ].filter(Boolean);

  const code = `import { Breadcrumbs, type BreadcrumbItem } from "@gem-org/gem-system";

const items: BreadcrumbItem[] = [
${items
  .map((item, index) =>
    index === items.length - 1
      ? `  { id: "${item.id}", label: "${String(item.label)}" },`
      : `  { id: "${item.id}", label: "${String(item.label)}", href: "/${item.id}" },`,
  )
  .join("\n")}
];

export function Example() {
  return (
    <Breadcrumbs
      ${attrs.join("\n      ")}
    />
  );
}`;

  const selects = [
    { id: "trail", value: trail, options: trailOptions, onChange: pick(setTrail) },
    { id: "size", value: size, options: breadcrumbSizes, onChange: pick(setSize) },
    { id: "separator", value: separator, options: separatorOptions, onChange: pick(setSeparator) },
    { id: "maxItems", value: maxItems, options: maxItemsOptions, onChange: pick(setMaxItems) },
    { id: "itemsBeforeCollapse", value: before, options: countOptions, onChange: pick(setBefore) },
    { id: "itemsAfterCollapse", value: after, options: countOptions, onChange: pick(setAfter) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="breadcrumbs-playground">
        {selects.map((select) => (
          <div key={select.id} className="breadcrumbs-playground__field">
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
      </div>

      <DemoBlock code={code} label="Example.tsx" stack>
        <Breadcrumbs
          items={items}
          size={size as BreadcrumbsSize}
          separator={separator === "chevron" ? undefined : separator}
          maxItems={collapse ? Number(maxItems) : undefined}
          itemsBeforeCollapse={Number(before)}
          itemsAfterCollapse={Number(after)}
          navLabel={texts.navLabel}
          overflowLabel={texts.overflowLabel}
        />
      </DemoBlock>
    </DocsSection>
  );
}
