import { useState } from "react";
import {
  Select,
  Sidebar,
  Typography,
  type SelectValue,
  type SidebarShadow,
  type SidebarSide,
} from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { sidebarLabels, useDemoItems, useNestedItems } from "./examples/demo.tsx";
import { DemoBrand } from "./examples/DemoBrand.tsx";
import { DemoUser } from "./examples/DemoUser.tsx";
import { SidebarFrame } from "./examples/SidebarFrame.tsx";
import { sidebarShadows, sidebarSides } from "./sidebarDocs.ts";

const booleanOptions = ["true", "false"] as const;
const itemsOptions = ["flat", "nested"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

export function SidebarPlayground() {
  const { t } = useTranslation("sidebar");
  const texts = t("demo", { returnObjects: true });
  const flatItems = useDemoItems(texts.items);
  const nestedItems = useNestedItems(texts.items);
  const [side, setSide] = useState<string>("start");
  const [shadow, setShadow] = useState<string>("none");
  const [bordered, setBordered] = useState<string>("true");
  const [collapsible, setCollapsible] = useState<string>("true");
  const [itemsMode, setItemsMode] = useState<string>("flat");
  const [withFooter, setWithFooter] = useState<string>("true");

  const nested = itemsMode === "nested";
  const showFooter = withFooter === "true";
  const source = nested ? nestedItems : flatItems;

  const attrs = [
    "header={<Brand />}",
    "items={items}",
    showFooter && "footer={<UserCard />}",
    side !== "start" && `side="${side}"`,
    shadow !== "none" && `shadow="${shadow}"`,
    bordered === "false" && "bordered={false}",
    collapsible === "false" && "collapsible={false}",
    `navLabel="${texts.navLabel}"`,
    `expandLabel="${texts.expandLabel}"`,
    `collapseLabel="${texts.collapseLabel}"`,
    `menuLabel="${texts.menuLabel}"`,
    `closeLabel="${texts.closeLabel}"`,
  ].filter(Boolean);

  const itemLine = (item: (typeof source)[number], indent: string): string =>
    item.items
      ? `${indent}{\n${indent}  id: "${item.id}",\n${indent}  label: "${item.label}",\n${indent}  icon: <Folder size="sm" />,\n${indent}  items: [\n${item.items
          .map((child) => `${indent}    { id: "${child.id}", label: "${child.label}", href: "/${child.id}" },`)
          .join("\n")}\n${indent}  ],\n${indent}},`
      : `${indent}{ id: "${item.id}", label: "${item.label}", href: "/${item.id}"${item.id === "home" ? ", current: true" : ""} },`;

  const code = `import { Sidebar, type SidebarItem } from "@gem-org/gem-system";

const items: SidebarItem[] = [
${source.map((item) => itemLine(item, "  ")).join("\n")}
];

export function Example() {
  return (
    <Sidebar
      ${attrs.join("\n      ")}
    />
  );
}`;

  const selects = [
    { id: "side", value: side, options: sidebarSides, onChange: pick(setSide) },
    { id: "shadow", value: shadow, options: sidebarShadows, onChange: pick(setShadow) },
    { id: "bordered", value: bordered, options: booleanOptions, onChange: pick(setBordered) },
    { id: "collapsible", value: collapsible, options: booleanOptions, onChange: pick(setCollapsible) },
    { id: "items", value: itemsMode, options: itemsOptions, onChange: pick(setItemsMode) },
    { id: "footer", value: withFooter, options: booleanOptions, onChange: pick(setWithFooter) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="sidebar-playground">
        {selects.map((select) => (
          <div key={select.id} className="sidebar-playground__field">
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
        <SidebarFrame end={side === "end"} title={texts.pageTitle} note={t("playground.note")}>
          <Sidebar
            position="static"
            side={side as SidebarSide}
            shadow={shadow as SidebarShadow}
            bordered={bordered === "true"}
            collapsible={collapsible === "true"}
            header={<DemoBrand />}
            items={source}
            footer={showFooter ? <DemoUser name={texts.user} /> : undefined}
            {...sidebarLabels(texts)}
          />
        </SidebarFrame>
      </DemoBlock>
    </DocsSection>
  );
}
