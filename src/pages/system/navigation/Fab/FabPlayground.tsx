import { useState } from "react";
import { Fab, Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { Plus } from "@gem-org/gem-system/icons";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { FAB_PLACEMENTS, FAB_SIZES, FAB_TONES, speedDialActions } from "./examples/demo.tsx";
import { FabStage } from "./examples/FabStage.tsx";
import "./examples/fab-demo.css";

const shadowOptions = ["none", "sm", "md", "lg", "xl"] as const;
const contentOptions = ["icon", "label", "actions"] as const;
const actionVariantOptions = ["tone", "surface"] as const;
const transitionOptions = ["scale", "opacity"] as const;
const actionIcons: Record<string, string> = {
  edit: "Edit",
  share: "Share",
  email: "Mail",
  delete: "Trash",
};

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

export function FabPlayground() {
  const { t } = useTranslation("fab");
  const texts = t("demo", { returnObjects: true });
  const [tone, setTone] = useState<string>("primary");
  const [size, setSize] = useState<string>("md");
  const [placement, setPlacement] = useState<string>("bottom-end");
  const [shadow, setShadow] = useState<string>("lg");
  const [content, setContent] = useState<string>("actions");
  const [actionVariant, setActionVariant] = useState<string>("tone");
  const [transition, setTransition] = useState<string>("scale");

  const withLabel = content === "label";
  const withActions = content === "actions";

  const attrs = [
    'position="absolute"',
    tone !== "primary" && `tone="${tone}"`,
    size !== "md" && `size="${size}"`,
    placement !== "bottom-end" && `placement="${placement}"`,
    shadow !== "lg" && `shadow="${shadow}"`,
    "icon={<Plus />}",
    withLabel
      ? `label="${texts.newRecord}"`
      : `aria-label="${withActions ? texts.actionsLabel : texts.create}"`,
    withActions && "actions={actions}",
    withActions && actionVariant !== "tone" && `actionVariant="${actionVariant}"`,
    withActions && transition !== "scale" && `transition="${transition}"`,
  ].filter(Boolean);

  const actionsCode = withActions
    ? `
const actions: FabAction[] = [
${speedDialActions(texts)
  .map(
    (action) =>
      `  { id: "${action.id}", label: "${action.label}", icon: <${actionIcons[action.id]} size="sm" />${action.tone ? `, tone: "${action.tone}"` : ""} },`,
  )
  .join("\n")}
];
`
    : "";

  const iconImports = withActions ? `Plus, ${Object.values(actionIcons).join(", ")}` : "Plus";

  const code = `import { Fab${withActions ? ", type FabAction" : ""} } from "@gem-org/gem-system";
import { ${iconImports} } from "@gem-org/gem-system/icons";
${actionsCode}
export function Example() {
  return (
    <div style={{ position: "relative", minHeight: "22rem" }}>
      <Fab
        ${attrs.join("\n        ")}
      />
    </div>
  );
}`;

  const selects = [
    { id: "tone", value: tone, options: FAB_TONES, onChange: pick(setTone) },
    { id: "size", value: size, options: FAB_SIZES, onChange: pick(setSize) },
    { id: "placement", value: placement, options: FAB_PLACEMENTS, onChange: pick(setPlacement) },
    { id: "shadow", value: shadow, options: shadowOptions, onChange: pick(setShadow) },
    { id: "content", value: content, options: contentOptions, onChange: pick(setContent) },
    {
      id: "actionVariant",
      value: actionVariant,
      options: actionVariantOptions,
      onChange: pick(setActionVariant),
    },
    {
      id: "transition",
      value: transition,
      options: transitionOptions,
      onChange: pick(setTransition),
    },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="fab-playground">
        {selects.map((select) => (
          <div key={select.id} className="fab-playground__field">
            <Typography variant="label">{t(`playground.${select.id}`)}</Typography>
            <Select
              aria-label={t(`playground.${select.id}`)}
              options={toOptions(select.options)}
              value={select.value}
              onChange={select.onChange}
              searchable={false}
              disabled={
                !withActions && (select.id === "actionVariant" || select.id === "transition")
              }
            />
          </div>
        ))}
      </div>

      <DemoBlock code={code} label="Example.tsx" stack>
        <FabStage tall>
          <Fab
            key={`${placement}-${content}`}
            position="absolute"
            tone={tone as (typeof FAB_TONES)[number]}
            size={size as (typeof FAB_SIZES)[number]}
            placement={placement as (typeof FAB_PLACEMENTS)[number]}
            shadow={shadow as (typeof shadowOptions)[number]}
            icon={<Plus />}
            label={withLabel ? texts.newRecord : undefined}
            aria-label={withLabel ? undefined : withActions ? texts.actionsLabel : texts.create}
            actions={withActions ? speedDialActions(texts) : undefined}
            actionVariant={actionVariant as (typeof actionVariantOptions)[number]}
            transition={transition as (typeof transitionOptions)[number]}
          />
        </FabStage>
      </DemoBlock>
    </DocsSection>
  );
}
