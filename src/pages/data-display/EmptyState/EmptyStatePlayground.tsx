import { useState } from "react";
import { Button, EmptyState, Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { Plus } from "@gem-org/gem-system/icons";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { EMPTY_STATE_ALIGNS, EMPTY_STATE_KINDS, EMPTY_STATE_RADII, EMPTY_STATE_SIZES } from "./examples/demo.ts";
import "./examples/empty-state-demo.css";

const booleanOptions = ["true", "false"] as const;
const actionOptions = ["none", "primary", "both"] as const;
const minHeightOptions = ["none", "220"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

export function EmptyStatePlayground() {
  const { t } = useTranslation("emptyState");
  const [kind, setKind] = useState<string>("empty");
  const [size, setSize] = useState<string>("md");
  const [align, setAlign] = useState<string>("center");
  const [radius, setRadius] = useState<string>("md");
  const [bordered, setBordered] = useState<string>("true");
  const [hideIcon, setHideIcon] = useState<string>("false");
  const [actions, setActions] = useState<string>("primary");
  const [minHeight, setMinHeight] = useState<string>("none");

  const title = t("playground.sampleTitle");
  const description = t("playground.sampleDescription");
  const create = t("playground.create");
  const importLabel = t("playground.import");

  const attrs = [
    kind !== "empty" && `kind="${kind}"`,
    `title="${title}"`,
    `description="${description}"`,
    size !== "md" && `size="${size}"`,
    align !== "center" && `align="${align}"`,
    bordered === "true" && "bordered",
    bordered === "true" && radius !== "md" && `radius="${radius}"`,
    hideIcon === "true" && "hideIcon",
    minHeight !== "none" && `minHeight={${minHeight}}`,
    actions !== "none" &&
      `action={<Button variant="primary" size="sm" leftIcon={<Plus size="sm" />}>${create}</Button>}`,
    actions === "both" && `secondaryAction={<Button variant="transparent" size="sm">${importLabel}</Button>}`,
  ].filter(Boolean);

  const code = `import { Button, EmptyState } from "@gem-org/gem-system";
import { Plus } from "@gem-org/gem-system/icons";

<EmptyState
  ${attrs.join("\n  ")}
/>`;

  const selects = [
    { id: "kind", value: kind, options: EMPTY_STATE_KINDS, onChange: pick(setKind) },
    { id: "size", value: size, options: EMPTY_STATE_SIZES, onChange: pick(setSize) },
    { id: "align", value: align, options: EMPTY_STATE_ALIGNS, onChange: pick(setAlign) },
    { id: "radius", value: radius, options: EMPTY_STATE_RADII, onChange: pick(setRadius) },
    { id: "bordered", value: bordered, options: booleanOptions, onChange: pick(setBordered) },
    { id: "hideIcon", value: hideIcon, options: booleanOptions, onChange: pick(setHideIcon) },
    { id: "action", value: actions, options: actionOptions, onChange: pick(setActions) },
    { id: "minHeight", value: minHeight, options: minHeightOptions, onChange: pick(setMinHeight) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="empty-state-playground">
        {selects.map((select) => (
          <div key={select.id} className="empty-state-playground__field">
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
        <div className="empty-state-demo">
          <EmptyState
            kind={kind as (typeof EMPTY_STATE_KINDS)[number]}
            size={size as (typeof EMPTY_STATE_SIZES)[number]}
            align={align as (typeof EMPTY_STATE_ALIGNS)[number]}
            radius={radius as (typeof EMPTY_STATE_RADII)[number]}
            bordered={bordered === "true"}
            hideIcon={hideIcon === "true"}
            minHeight={minHeight === "none" ? undefined : Number(minHeight)}
            title={title}
            description={description}
            action={
              actions === "none" ? undefined : (
                <Button variant="primary" size="sm" leftIcon={<Plus size="sm" />}>
                  {create}
                </Button>
              )
            }
            secondaryAction={
              actions === "both" ? (
                <Button variant="transparent" size="sm">
                  {importLabel}
                </Button>
              ) : undefined
            }
          />
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
