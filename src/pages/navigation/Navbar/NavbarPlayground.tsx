import { useState } from "react";
import {
  Button,
  Navbar,
  Select,
  Typography,
  type NavbarCollapseBreakpoint,
  type NavbarShadow,
  type SelectValue,
} from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { useDemoItems } from "./examples/demo.ts";
import { DemoBrand } from "./examples/DemoBrand.tsx";
import { navbarBreakpoints, navbarShadows } from "./navbarDocs.ts";
import "./examples/navbar-demo.css";

const booleanOptions = ["true", "false"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

export function NavbarPlayground() {
  const { t } = useTranslation("navbar");
  const texts = t("demo", { returnObjects: true });
  const items = useDemoItems(texts.items);
  const [collapseBreakpoint, setCollapseBreakpoint] = useState<string>("md");
  const [shadow, setShadow] = useState<string>("none");
  const [bordered, setBordered] = useState<string>("true");
  const [withItems, setWithItems] = useState<string>("true");
  const [withActions, setWithActions] = useState<string>("true");

  const showItems = withItems === "true";
  const showActions = withActions === "true";

  const attrs = [
    "brand={<Brand />}",
    showItems && "items={items}",
    collapseBreakpoint !== "md" && `collapseBreakpoint="${collapseBreakpoint}"`,
    shadow !== "none" && `shadow="${shadow}"`,
    bordered === "false" && "bordered={false}",
    `navLabel="${texts.navLabel}"`,
    `menuLabel="${texts.menuLabel}"`,
    `closeLabel="${texts.closeLabel}"`,
    showActions && `actions={<Button variant="primary" size="sm">${texts.getStarted}</Button>}`,
  ].filter(Boolean);

  const itemsCode = showItems
    ? `\nconst items: NavbarItem[] = [\n${texts.items
        .map((label, index) => `  { id: "${index}", label: "${label}", href: "/${index}"${index === 0 ? ", current: true" : ""} },`)
        .join("\n")}\n];\n`
    : "";

  const code = `import { Button, Navbar${showItems ? ", type NavbarItem" : ""} } from "@gem-org/gem-system";
${itemsCode}
export function Example() {
  return (
    <Navbar
      ${attrs.join("\n      ")}
    />
  );
}`;

  const selects = [
    { id: "collapseBreakpoint", value: collapseBreakpoint, options: navbarBreakpoints, onChange: pick(setCollapseBreakpoint) },
    { id: "shadow", value: shadow, options: navbarShadows, onChange: pick(setShadow) },
    { id: "bordered", value: bordered, options: booleanOptions, onChange: pick(setBordered) },
    { id: "items", value: withItems, options: booleanOptions, onChange: pick(setWithItems) },
    { id: "actions", value: withActions, options: booleanOptions, onChange: pick(setWithActions) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="navbar-playground">
        {selects.map((select) => (
          <div key={select.id} className="navbar-playground__field">
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
        <div className="navbar-frame pb-10">
          <Navbar
            brand={<DemoBrand />}
            items={showItems ? items : []}
            collapseBreakpoint={collapseBreakpoint as NavbarCollapseBreakpoint}
            shadow={shadow as NavbarShadow}
            bordered={bordered === "true"}
            navLabel={texts.navLabel}
            menuLabel={texts.menuLabel}
            closeLabel={texts.closeLabel}
            actions={
              showActions ? (
                <Button variant="primary" size="sm">
                  {texts.getStarted}
                </Button>
              ) : undefined
            }
          />
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
