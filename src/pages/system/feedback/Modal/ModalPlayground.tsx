import { useState } from "react";
import { Button, Modal, Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";

const sizeOptions = ["sm", "md", "lg", "xl", "full"] as const;
const shadowOptions = ["none", "xs", "sm", "md", "lg", "xl"] as const;
const radiusOptions = ["sm", "md", "lg"] as const;
const booleanOptions = ["true", "false"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

export function ModalPlayground() {
  const { t } = useTranslation("modal");
  const common = t("common", { returnObjects: true });
  const texts = t("playground.texts", { returnObjects: true });
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<string>("md");
  const [shadow, setShadow] = useState<string>("xl");
  const [radius, setRadius] = useState<string>("md");
  const [bordered, setBordered] = useState<string>("true");
  const [closeOnBackdrop, setCloseOnBackdrop] = useState<string>("true");
  const [closeOnEscape, setCloseOnEscape] = useState<string>("true");
  const [showClose, setShowClose] = useState<string>("true");
  const [draggable, setDraggable] = useState<string>("false");

  const attrs = [
    "open={open}",
    "onOpenChange={setOpen}",
    `title="${texts.title}"`,
    `subtitle="${texts.subtitle}"`,
    size !== "md" && `size="${size}"`,
    shadow !== "xl" && `shadow="${shadow}"`,
    radius !== "md" && `radius="${radius}"`,
    bordered === "false" && "bordered={false}",
    closeOnBackdrop === "false" && "closeOnBackdrop={false}",
    closeOnEscape === "false" && "closeOnEscape={false}",
    showClose === "false" ? "showClose={false}" : `closeLabel="${common.closeLabel}"`,
    draggable === "true" && "draggable",
    `footer={<Button size="sm" onClick={() => setOpen(false)}>${common.done}</Button>}`,
  ].filter(Boolean);

  const code = `import { useState } from "react";
import { Button, Modal } from "@gem-org/gem-system";

export function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>${texts.open}</Button>
      <Modal
        ${attrs.join("\n        ")}
      >
        ${texts.body}
      </Modal>
    </>
  );
}`;

  const selects = [
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
    { id: "draggable", value: draggable, options: booleanOptions, onChange: pick(setDraggable) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="modal-playground">
        {selects.map((select) => (
          <div key={select.id} className="modal-playground__field">
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
        <Modal
          open={open}
          onOpenChange={setOpen}
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
          draggable={draggable === "true"}
          footer={
            <Button size="sm" onClick={() => setOpen(false)}>
              {common.done}
            </Button>
          }
        >
          {texts.body}
        </Modal>
      </DemoBlock>
    </DocsSection>
  );
}
