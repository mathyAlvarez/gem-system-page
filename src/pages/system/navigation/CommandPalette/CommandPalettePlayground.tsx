import { useState } from "react";
import {
  Button,
  CommandPalette,
  Select,
  Typography,
  type CommandPaletteRadius,
  type CommandPaletteShadow,
  type CommandPaletteSize,
  type SelectValue,
} from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { groupedCommands, paletteLabels } from "./examples/demo.tsx";
import {
  commandPaletteRadii,
  commandPaletteShadows,
  commandPaletteSizes,
} from "./commandPaletteDocs.ts";

const booleanOptions = ["true", "false"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

export function CommandPalettePlayground() {
  const { t } = useTranslation("commandPalette");
  const texts = t("demo", { returnObjects: true });
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<string>("md");
  const [shadow, setShadow] = useState<string>("xl");
  const [radius, setRadius] = useState<string>("md");
  const [closeOnSelect, setCloseOnSelect] = useState<string>("true");
  const [loop, setLoop] = useState<string>("true");
  const [loading, setLoading] = useState<string>("false");

  const attrs = [
    "items={items}",
    "open={open}",
    "onOpenChange={setOpen}",
    `placeholder="${texts.placeholder}"`,
    `label="${texts.label}"`,
    `emptyText="${texts.empty}"`,
    size !== "md" && `size="${size}"`,
    shadow !== "xl" && `shadow="${shadow}"`,
    radius !== "md" && `radius="${radius}"`,
    closeOnSelect === "false" && "closeOnSelect={false}",
    loop === "false" && "loop={false}",
    loading === "true" && "loading",
    loading === "true" && `loadingText="${texts.loading}"`,
    "onSelect={(id) => console.log(id)}",
  ].filter(Boolean);

  const { items, groups } = texts;
  const code = `import { useState } from "react";
import { Button, CommandPalette, type CommandPaletteItem } from "@gem-org/gem-system";
import { Calendar, Folder, Home, Settings, Trash, User } from "@gem-org/gem-system/icons";

const items: CommandPaletteItem[] = [
  {
    type: "group",
    id: "navigation",
    label: "${groups.navigation}",
    items: [
      { id: "home", label: "${items.home.label}", icon: <Home size="sm" />, shortcut: ["G", "H"] },
      { id: "projects", label: "${items.projects.label}", icon: <Folder size="sm" />, shortcut: ["G", "P"] },
      { id: "calendar", label: "${items.calendar.label}", icon: <Calendar size="sm" /> },
    ],
  },
  {
    type: "group",
    id: "actions",
    label: "${groups.actions}",
    items: [
      { id: "profile", label: "${items.profile.label}", icon: <User size="sm" /> },
      { id: "settings", label: "${items.settings.label}", icon: <Settings size="sm" />, shortcut: ["Ctrl", ","] },
      { id: "delete", label: "${items.delete.label}", icon: <Trash size="sm" />, danger: true },
    ],
  },
];

export function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>${texts.open}</Button>
      <CommandPalette
        ${attrs.join("\n        ")}
      />
    </>
  );
}`;

  const selects = [
    { id: "size", value: size, options: commandPaletteSizes, onChange: pick(setSize) },
    { id: "shadow", value: shadow, options: commandPaletteShadows, onChange: pick(setShadow) },
    { id: "radius", value: radius, options: commandPaletteRadii, onChange: pick(setRadius) },
    {
      id: "closeOnSelect",
      value: closeOnSelect,
      options: booleanOptions,
      onChange: pick(setCloseOnSelect),
    },
    { id: "loop", value: loop, options: booleanOptions, onChange: pick(setLoop) },
    { id: "loading", value: loading, options: booleanOptions, onChange: pick(setLoading) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="command-palette-playground">
        {selects.map((select) => (
          <div key={select.id} className="command-palette-playground__field">
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
        <Button onClick={() => setOpen(true)}>{texts.open}</Button>
        <CommandPalette
          items={groupedCommands(texts)}
          open={open}
          onOpenChange={setOpen}
          size={size as CommandPaletteSize}
          shadow={shadow as CommandPaletteShadow}
          radius={radius as CommandPaletteRadius}
          closeOnSelect={closeOnSelect === "true"}
          loop={loop === "true"}
          loading={loading === "true"}
          shortcut={false}
          {...paletteLabels(texts)}
        />
      </DemoBlock>
    </DocsSection>
  );
}
