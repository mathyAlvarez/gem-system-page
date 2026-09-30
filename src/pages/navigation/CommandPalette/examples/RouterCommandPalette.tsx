import { useState } from "react";
import { Button, CommandPalette, type CommandPaletteItem } from "@gem-org/gem-system";
import { ArrowRight } from "@gem-org/gem-system/icons";
import { useNavigate } from "react-router-dom";
import { paletteLabels, type CommandPaletteTexts } from "./demo.tsx";
import "./command-palette-demo.css";

const pages = {
  components: [
    { path: "/components/button", label: "Button" },
    { path: "/components/select", label: "Select" },
  ],
  navigation: [
    { path: "/navigation/tabs", label: "Tabs" },
    { path: "/navigation/dropdown-menu", label: "Dropdown Menu" },
    { path: "/navigation/block-ui", label: "BlockUi" },
  ],
};

type RouterCommandPaletteProps = {
  texts: CommandPaletteTexts;
  open: string;
  groups: { components: string; navigation: string };
};

export function RouterCommandPalette({ texts, open: openLabel, groups }: RouterCommandPaletteProps) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const items: CommandPaletteItem[] = (Object.keys(pages) as (keyof typeof pages)[]).map((group) => ({
    type: "group",
    id: group,
    label: groups[group],
    items: pages[group].map((page) => ({
      id: page.path,
      label: page.label,
      description: page.path,
      icon: <ArrowRight size="sm" />,
      onSelect: () => navigate(page.path),
    })),
  }));

  return (
    <div className="palette-stack">
      <Button onClick={() => setOpen(true)}>{openLabel}</Button>
      <CommandPalette items={items} open={open} onOpenChange={setOpen} shortcut={false} {...paletteLabels(texts)} />
    </div>
  );
}
