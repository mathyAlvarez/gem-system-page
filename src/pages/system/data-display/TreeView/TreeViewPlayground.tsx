import { useState } from "react";
import { Select, TreeView, Typography, type SelectValue } from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { PROJECT_ITEMS, TREE_RADII, TREE_SELECTION_MODES, TREE_SIZES } from "./examples/demo.tsx";
import "./examples/tree-view-demo.css";

const booleanOptions = ["true", "false"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

export function TreeViewPlayground() {
  const { t } = useTranslation("treeView");
  const [size, setSize] = useState<string>("md");
  const [selectionMode, setSelectionMode] = useState<string>("single");
  const [checkable, setCheckable] = useState<string>("false");
  const [cascadeCheck, setCascadeCheck] = useState<string>("true");
  const [showLines, setShowLines] = useState<string>("false");
  const [hideIcons, setHideIcons] = useState<string>("false");
  const [bordered, setBordered] = useState<string>("true");
  const [radius, setRadius] = useState<string>("md");
  const [isDisabled, setIsDisabled] = useState<string>("false");
  const [defaultExpandAll, setDefaultExpandAll] = useState<string>("false");

  const attrs = [
    `listLabel="${t("common.listLabel")}"`,
    "items={items}",
    size !== "md" && `size="${size}"`,
    selectionMode !== "single" && `selectionMode="${selectionMode}"`,
    checkable === "true" && "checkable",
    checkable === "true" && cascadeCheck === "false" && "cascadeCheck={false}",
    showLines === "true" && "showLines",
    hideIcons === "true" && "hideIcons",
    bordered === "true" && "bordered",
    bordered === "true" && radius !== "md" && `radius="${radius}"`,
    isDisabled === "true" && "isDisabled",
    defaultExpandAll === "true" && "defaultExpandAll",
  ].filter(Boolean);

  const code = `import { TreeView } from "@gem-org/gem-system";

<TreeView
  ${attrs.join("\n  ")}
/>`;

  const selects = [
    { id: "size", value: size, options: TREE_SIZES, onChange: pick(setSize) },
    {
      id: "selectionMode",
      value: selectionMode,
      options: TREE_SELECTION_MODES,
      onChange: pick(setSelectionMode),
    },
    { id: "checkable", value: checkable, options: booleanOptions, onChange: pick(setCheckable) },
    {
      id: "cascadeCheck",
      value: cascadeCheck,
      options: booleanOptions,
      onChange: pick(setCascadeCheck),
    },
    { id: "showLines", value: showLines, options: booleanOptions, onChange: pick(setShowLines) },
    { id: "hideIcons", value: hideIcons, options: booleanOptions, onChange: pick(setHideIcons) },
    { id: "bordered", value: bordered, options: booleanOptions, onChange: pick(setBordered) },
    { id: "radius", value: radius, options: TREE_RADII, onChange: pick(setRadius) },
    { id: "isDisabled", value: isDisabled, options: booleanOptions, onChange: pick(setIsDisabled) },
    {
      id: "defaultExpandAll",
      value: defaultExpandAll,
      options: booleanOptions,
      onChange: pick(setDefaultExpandAll),
    },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="tree-view-playground">
        {selects.map((select) => (
          <div key={select.id} className="tree-view-playground__field">
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
        <div className="tree-view-demo">
          <TreeView
            key={defaultExpandAll}
            listLabel={t("common.listLabel")}
            items={PROJECT_ITEMS}
            size={size as (typeof TREE_SIZES)[number]}
            selectionMode={selectionMode as (typeof TREE_SELECTION_MODES)[number]}
            checkable={checkable === "true"}
            cascadeCheck={cascadeCheck === "true"}
            showLines={showLines === "true"}
            hideIcons={hideIcons === "true"}
            bordered={bordered === "true"}
            radius={radius as (typeof TREE_RADII)[number]}
            isDisabled={isDisabled === "true"}
            defaultExpandAll={defaultExpandAll === "true"}
          />
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
