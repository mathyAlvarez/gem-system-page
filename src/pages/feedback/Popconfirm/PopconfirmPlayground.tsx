import { useState } from "react";
import { Button, Popconfirm, Select, Typography, toast, type SelectValue } from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";

const toneOptions = ["danger", "warning", "primary"] as const;
const sizeOptions = ["md", "sm"] as const;
const placementOptions = ["top", "bottom", "left", "right"] as const;
const focusOptions = ["cancel", "confirm"] as const;
const booleanOptions = ["true", "false"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

const buttonVariant = { danger: "danger", warning: "warning", primary: "primary" } as const;

export function PopconfirmPlayground() {
  const { t } = useTranslation("popconfirm");
  const common = t("common", { returnObjects: true });
  const texts = t("playground.texts", { returnObjects: true });
  const [tone, setTone] = useState<string>("danger");
  const [size, setSize] = useState<string>("md");
  const [placement, setPlacement] = useState<string>("top");
  const [showCancel, setShowCancel] = useState<string>("true");
  const [hideIcon, setHideIcon] = useState<string>("false");
  const [initialFocus, setInitialFocus] = useState<string>("cancel");
  const [closeOnClickOutside, setCloseOnClickOutside] = useState<string>("true");
  const [closeOnEscape, setCloseOnEscape] = useState<string>("true");

  const attrs = [
    tone !== "danger" && `tone="${tone}"`,
    size !== "md" && `size="${size}"`,
    placement !== "top" && `placement="${placement}"`,
    showCancel === "false" && "showCancel={false}",
    hideIcon === "true" && "hideIcon",
    initialFocus !== "cancel" && `initialFocus="${initialFocus}"`,
    closeOnClickOutside === "false" && "closeOnClickOutside={false}",
    closeOnEscape === "false" && "closeOnEscape={false}",
    `title="${texts.title}"`,
    `description="${texts.description}"`,
    `confirmLabel="${common.confirm}"`,
    `cancelLabel="${common.cancel}"`,
    `onConfirm={() => {
        toast.success("${texts.done}");
      }}`,
  ].filter(Boolean);

  const variant = buttonVariant[tone as keyof typeof buttonVariant];

  const code = `import { Button, Popconfirm, toast } from "@gem-org/gem-system";

export function Example() {
  return (
    <Popconfirm
      ${attrs.join("\n      ")}
    >
      <Button variant="${variant}">${texts.trigger}</Button>
    </Popconfirm>
  );
}`;

  const selects = [
    { id: "tone", value: tone, options: toneOptions, onChange: pick(setTone) },
    { id: "size", value: size, options: sizeOptions, onChange: pick(setSize) },
    { id: "placement", value: placement, options: placementOptions, onChange: pick(setPlacement) },
    { id: "showCancel", value: showCancel, options: booleanOptions, onChange: pick(setShowCancel) },
    { id: "hideIcon", value: hideIcon, options: booleanOptions, onChange: pick(setHideIcon) },
    { id: "initialFocus", value: initialFocus, options: focusOptions, onChange: pick(setInitialFocus) },
    {
      id: "closeOnClickOutside",
      value: closeOnClickOutside,
      options: booleanOptions,
      onChange: pick(setCloseOnClickOutside),
    },
    { id: "closeOnEscape", value: closeOnEscape, options: booleanOptions, onChange: pick(setCloseOnEscape) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="popconfirm-playground">
        {selects.map((select) => (
          <div key={select.id} className="popconfirm-playground__field">
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
        <div className="popconfirm-playground__preview">
          <Popconfirm
            tone={tone as (typeof toneOptions)[number]}
            size={size as (typeof sizeOptions)[number]}
            placement={placement as (typeof placementOptions)[number]}
            showCancel={showCancel === "true"}
            hideIcon={hideIcon === "true"}
            initialFocus={initialFocus as (typeof focusOptions)[number]}
            closeOnClickOutside={closeOnClickOutside === "true"}
            closeOnEscape={closeOnEscape === "true"}
            title={texts.title}
            description={texts.description}
            confirmLabel={common.confirm}
            cancelLabel={common.cancel}
            onConfirm={() => {
              toast.success(texts.done);
            }}
          >
            <Button variant={variant}>{texts.trigger}</Button>
          </Popconfirm>
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
