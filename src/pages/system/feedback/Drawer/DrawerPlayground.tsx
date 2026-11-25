import { useState } from "react";
import { Button, Drawer, Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";

const placementOptions = ["right", "left", "top", "bottom"] as const;
const sizeOptions = ["sm", "md", "lg", "xl", "full"] as const;
const shadowOptions = ["none", "xs", "sm", "md", "lg", "xl"] as const;
const radiusOptions = ["sm", "md", "lg"] as const;
const booleanOptions = ["true", "false"] as const;
const handleOptions = ["auto", "true", "false"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

export function DrawerPlayground() {
  const { t } = useTranslation("drawer");
  const common = t("common", { returnObjects: true });
  const texts = t("playground.texts", { returnObjects: true });
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<string>("right");
  const [size, setSize] = useState<string>("md");
  const [shadow, setShadow] = useState<string>("xl");
  const [radius, setRadius] = useState<string>("md");
  const [bordered, setBordered] = useState<string>("true");
  const [closeOnBackdrop, setCloseOnBackdrop] = useState<string>("true");
  const [closeOnEscape, setCloseOnEscape] = useState<string>("true");
  const [showClose, setShowClose] = useState<string>("true");
  const [showHandle, setShowHandle] = useState<string>("auto");

  const attrs = [
    "open={open}",
    "onOpenChange={setOpen}",
    placement !== "right" && `placement="${placement}"`,
    `title="${texts.title}"`,
    `subtitle="${texts.subtitle}"`,
    size !== "md" && `size="${size}"`,
    shadow !== "xl" && `shadow="${shadow}"`,
    radius !== "md" && `radius="${radius}"`,
    bordered === "false" && "bordered={false}",
    closeOnBackdrop === "false" && "closeOnBackdrop={false}",
    closeOnEscape === "false" && "closeOnEscape={false}",
    showClose === "false" ? "showClose={false}" : `closeLabel="${common.closeLabel}"`,
    showHandle !== "auto" && `showHandle={${showHandle}}`,
    `footer={<Button size="sm" onClick={() => setOpen(false)}>${common.done}</Button>}`,
  ].filter(Boolean);

  const code = `import { useState } from "react";
import { Button, Drawer } from "@gem-org/gem-system";

export function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>${texts.open}</Button>
      <Drawer
        ${attrs.join("\n        ")}
      >
        ${texts.body}
      </Drawer>
    </>
  );
}`;

  const selects = [
    { id: "placement", value: placement, options: placementOptions, onChange: pick(setPlacement) },
    { id: "size", value: size, options: sizeOptions, onChange: pick(setSize) },
    { id: "shadow", value: shadow, options: shadowOptions, onChange: pick(setShadow) },
    { id: "radius", value: radius, options: radiusOptions, onChange: pick(setRadius) },
    { id: "bordered", value: bordered, options: booleanOptions, onChange: pick(setBordered) },
    {
      id: "closeOnBackdrop",
      value: closeOnBackdrop,
      options: booleanOptions,
      onChange: pick(setCloseOnBackdrop),
    },
    {
      id: "closeOnEscape",
      value: closeOnEscape,
      options: booleanOptions,
      onChange: pick(setCloseOnEscape),
    },
    { id: "showClose", value: showClose, options: booleanOptions, onChange: pick(setShowClose) },
    { id: "showHandle", value: showHandle, options: handleOptions, onChange: pick(setShowHandle) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="drawer-playground">
        {selects.map((select) => (
          <div key={select.id} className="drawer-playground__field">
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
        <Button onClick={() => setOpen(true)}>{texts.open}</Button>
        <Drawer
          open={open}
          onOpenChange={setOpen}
          placement={placement as (typeof placementOptions)[number]}
          title={texts.title}
          subtitle={texts.subtitle}
          size={size as (typeof sizeOptions)[number]}
          shadow={shadow as (typeof shadowOptions)[number]}
          radius={radius as (typeof radiusOptions)[number]}
          bordered={bordered === "true"}
          closeOnBackdrop={closeOnBackdrop === "true"}
          closeOnEscape={closeOnEscape === "true"}
          showClose={showClose === "true"}
          closeLabel={common.closeLabel}
          showHandle={showHandle === "auto" ? undefined : showHandle === "true"}
          footer={
            <Button size="sm" onClick={() => setOpen(false)}>
              {common.done}
            </Button>
          }
        >
          {texts.body}
        </Drawer>
      </DemoBlock>
    </DocsSection>
  );
}
