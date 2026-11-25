import { useState } from "react";
import {
  Select,
  Tabs,
  Typography,
  type SelectValue,
  type TabItem,
  type TabsActivation,
  type TabsOrientation,
  type TabsSize,
  type TabsVariant,
} from "@gem-org/gem-system";
import { Bell, Info, Settings } from "@gem-org/gem-system/icons";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { baseItems } from "./examples/demo.ts";
import { tabsActivations, tabsOrientations, tabsSizes, tabsVariants } from "./tabsDocs.ts";

const booleanOptions = ["false", "true"] as const;

const icons: Record<string, TabItem["icon"]> = {
  overview: <Info size="sm" />,
  activity: <Bell size="sm" />,
  settings: <Settings size="sm" />,
};

const iconNames: Record<string, string> = {
  overview: "Info",
  activity: "Bell",
  settings: "Settings",
};

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

export function TabsPlayground() {
  const { t } = useTranslation("tabs");
  const texts = t("demo", { returnObjects: true });
  const [variant, setVariant] = useState<string>("line");
  const [size, setSize] = useState<string>("md");
  const [orientation, setOrientation] = useState<string>("horizontal");
  const [activation, setActivation] = useState<string>("automatic");
  const [fullWidth, setFullWidth] = useState<string>("false");
  const [withIcons, setWithIcons] = useState<string>("false");

  const showIcons = withIcons === "true";
  const items = baseItems(texts).map((item) =>
    showIcons ? { ...item, icon: icons[item.id] } : item,
  );

  const attrs = [
    "items={items}",
    variant !== "line" && `variant="${variant}"`,
    size !== "md" && `size="${size}"`,
    orientation !== "horizontal" && `orientation="${orientation}"`,
    activation !== "automatic" && `activation="${activation}"`,
    fullWidth === "true" && "fullWidth",
    `listLabel="${texts.listLabel}"`,
  ].filter(Boolean);

  const iconImport = showIcons
    ? `\nimport { Bell, Info, Settings } from "@gem-org/gem-system/icons";`
    : "";

  const code = `import { Tabs, type TabItem } from "@gem-org/gem-system";${iconImport}

const items: TabItem[] = [
${items
  .map((item) => {
    const icon = showIcons ? `, icon: <${iconNames[item.id]} size="sm" />` : "";
    return `  { id: "${item.id}", label: "${String(item.label)}"${icon}, content: "${String(item.content)}" },`;
  })
  .join("\n")}
];

export function Example() {
  return (
    <Tabs
      ${attrs.join("\n      ")}
    />
  );
}`;

  const selects = [
    { id: "variant", value: variant, options: tabsVariants, onChange: pick(setVariant) },
    { id: "size", value: size, options: tabsSizes, onChange: pick(setSize) },
    {
      id: "orientation",
      value: orientation,
      options: tabsOrientations,
      onChange: pick(setOrientation),
    },
    {
      id: "activation",
      value: activation,
      options: tabsActivations,
      onChange: pick(setActivation),
    },
    { id: "fullWidth", value: fullWidth, options: booleanOptions, onChange: pick(setFullWidth) },
    { id: "icons", value: withIcons, options: booleanOptions, onChange: pick(setWithIcons) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="tabs-playground">
        {selects.map((select) => (
          <div key={select.id} className="tabs-playground__field">
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
        <Tabs
          items={items}
          variant={variant as TabsVariant}
          size={size as TabsSize}
          orientation={orientation as TabsOrientation}
          activation={activation as TabsActivation}
          fullWidth={fullWidth === "true"}
          listLabel={texts.listLabel}
        />
      </DemoBlock>
    </DocsSection>
  );
}
