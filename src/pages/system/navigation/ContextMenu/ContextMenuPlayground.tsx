import { useState } from "react";
import {
  ContextMenu,
  Select,
  Typography,
  type ContextMenuSize,
  type SelectValue,
} from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { actionItems, MDN_CONTEXTMENU } from "./examples/demo.tsx";
import { contextMenuSizes } from "./contextMenuDocs.ts";
import "./examples/context-menu-demo.css";

const booleanOptions = ["true", "false"] as const;
const longPressOptions = ["500", "800", "false"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

export function ContextMenuPlayground() {
  const { t } = useTranslation("contextMenu");
  const texts = t("demo", { returnObjects: true });
  const title = t("playground.surface");
  const [size, setSize] = useState<string>("md");
  const [closeOnLeave, setCloseOnLeave] = useState<string>("true");
  const [longPress, setLongPress] = useState<string>("500");
  const [isDisabled, setIsDisabled] = useState<string>("false");

  const attrs = [
    "items={items}",
    `menuLabel="${texts.menuLabel}"`,
    size !== "md" && `size="${size}"`,
    closeOnLeave === "false" && "closeOnLeave={false}",
    longPress !== "500" && `longPressMs={${longPress}}`,
    isDisabled === "true" && "isDisabled",
    "onAction={(id) => console.log(id)}",
  ].filter(Boolean);

  const { items } = texts;
  const code = `import { ContextMenu, type ContextMenuItem } from "@gem-org/gem-system";
import { Copy, Download, Edit, ExternalLink, Share, Trash } from "@gem-org/gem-system/icons";

const items: ContextMenuItem[] = [
  { id: "edit", label: "${items.edit}", icon: <Edit size="sm" />, shortcut: "Ctrl+E" },
  { id: "duplicate", label: "${items.duplicate}", icon: <Copy size="sm" />, shortcut: "Ctrl+D" },
  { id: "share", label: "${items.share}", icon: <Share size="sm" /> },
  { type: "separator" },
  { id: "download", label: "${items.download}", icon: <Download size="sm" /> },
  { id: "guide", label: "${items.guide}", icon: <ExternalLink size="sm" />, href: "${MDN_CONTEXTMENU}", target: "_blank" },
  { type: "separator" },
  { id: "delete", label: "${items.delete}", icon: <Trash size="sm" />, danger: true },
];

export function Example() {
  return (
    <ContextMenu
      ${attrs.join("\n      ")}
    >
      <div className="surface">${title}</div>
    </ContextMenu>
  );
}`;

  const selects = [
    { id: "size", value: size, options: contextMenuSizes, onChange: pick(setSize) },
    {
      id: "closeOnLeave",
      value: closeOnLeave,
      options: booleanOptions,
      onChange: pick(setCloseOnLeave),
    },
    {
      id: "longPressMs",
      value: longPress,
      options: longPressOptions,
      onChange: pick(setLongPress),
    },
    {
      id: "isDisabled",
      value: isDisabled,
      options: ["false", "true"],
      onChange: pick(setIsDisabled),
    },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="context-menu-playground">
        {selects.map((select) => (
          <div key={select.id} className="context-menu-playground__field">
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

      <DemoBlock code={code} label="Example.tsx">
        <ContextMenu
          items={actionItems(texts)}
          menuLabel={texts.menuLabel}
          size={size as ContextMenuSize}
          closeOnLeave={closeOnLeave === "true"}
          longPressMs={longPress === "false" ? false : Number(longPress)}
          isDisabled={isDisabled === "true"}
          className="w-full"
        >
          <div className="ctx-surface">
            <p className="ctx-surface__title">{title}</p>
            <p className="ctx-surface__hint">{texts.hint}</p>
          </div>
        </ContextMenu>
      </DemoBlock>
    </DocsSection>
  );
}
