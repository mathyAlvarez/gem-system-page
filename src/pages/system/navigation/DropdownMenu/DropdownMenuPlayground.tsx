import { useState } from "react";
import {
  Button,
  DropdownMenu,
  Select,
  Typography,
  type DropdownMenuPlacement,
  type DropdownMenuSize,
  type SelectValue,
} from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { actionItems, MDN_MENU_ROLE } from "./examples/demo.tsx";
import { dropdownMenuPlacements, dropdownMenuSizes } from "./dropdownMenuDocs.ts";

const booleanOptions = ["false", "true"] as const;
const offsetOptions = ["2", "6", "12"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

export function DropdownMenuPlayground() {
  const { t } = useTranslation("dropdownMenu");
  const texts = t("demo", { returnObjects: true });
  const [size, setSize] = useState<string>("md");
  const [placement, setPlacement] = useState<string>("bottom-start");
  const [offset, setOffset] = useState<string>("6");
  const [matchTriggerWidth, setMatchTriggerWidth] = useState<string>("false");
  const [isDisabled, setIsDisabled] = useState<string>("false");

  const attrs = [
    "items={items}",
    `menuLabel="${texts.menuLabel}"`,
    size !== "md" && `size="${size}"`,
    placement !== "bottom-start" && `placement="${placement}"`,
    offset !== "6" && `offset={${offset}}`,
    matchTriggerWidth === "true" && "matchTriggerWidth",
    isDisabled === "true" && "isDisabled",
    `trigger={<Button variant="secondary">${texts.trigger}</Button>}`,
    "onAction={(id) => console.log(id)}",
  ].filter(Boolean);

  const { items } = texts;
  const code = `import { Button, DropdownMenu, type DropdownMenuItem } from "@gem-org/gem-system";
import { Copy, Download, Edit, ExternalLink, Share, Trash } from "@gem-org/gem-system/icons";

const items: DropdownMenuItem[] = [
  { id: "edit", label: "${items.edit}", icon: <Edit size="sm" />, shortcut: "Ctrl+E" },
  { id: "duplicate", label: "${items.duplicate}", icon: <Copy size="sm" />, shortcut: "Ctrl+D" },
  { id: "share", label: "${items.share}", icon: <Share size="sm" /> },
  { type: "separator" },
  { id: "download", label: "${items.download}", icon: <Download size="sm" /> },
  { id: "guide", label: "${items.guide}", icon: <ExternalLink size="sm" />, href: "${MDN_MENU_ROLE}", target: "_blank" },
  { type: "separator" },
  { id: "delete", label: "${items.delete}", icon: <Trash size="sm" />, danger: true },
];

export function Example() {
  return (
    <DropdownMenu
      ${attrs.join("\n      ")}
    />
  );
}`;

  const selects = [
    { id: "size", value: size, options: dropdownMenuSizes, onChange: pick(setSize) },
    {
      id: "placement",
      value: placement,
      options: dropdownMenuPlacements,
      onChange: pick(setPlacement),
    },
    { id: "offset", value: offset, options: offsetOptions, onChange: pick(setOffset) },
    {
      id: "matchTriggerWidth",
      value: matchTriggerWidth,
      options: booleanOptions,
      onChange: pick(setMatchTriggerWidth),
    },
    { id: "isDisabled", value: isDisabled, options: booleanOptions, onChange: pick(setIsDisabled) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="dropdown-menu-playground">
        {selects.map((select) => (
          <div key={select.id} className="dropdown-menu-playground__field">
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
        <DropdownMenu
          items={actionItems(texts)}
          menuLabel={texts.menuLabel}
          size={size as DropdownMenuSize}
          placement={placement as DropdownMenuPlacement}
          offset={Number(offset)}
          matchTriggerWidth={matchTriggerWidth === "true"}
          isDisabled={isDisabled === "true"}
          trigger={<Button variant="secondary">{texts.trigger}</Button>}
        />
      </DemoBlock>
    </DocsSection>
  );
}
