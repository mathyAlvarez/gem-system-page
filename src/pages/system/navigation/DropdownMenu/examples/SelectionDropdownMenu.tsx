import { useState } from "react";
import { Button, DropdownMenu, type DropdownMenuItem } from "@gem-org/gem-system";
import "./dropdown-menu-demo.css";

type SelectionTexts = {
  trigger: string;
  menuLabel: string;
  section: string;
  grid: string;
  density: string;
  compact: string;
  comfortable: string;
  spacious: string;
  on: string;
  off: string;
};

type SelectionDropdownMenuProps = { texts: SelectionTexts };

export function SelectionDropdownMenu({ texts }: SelectionDropdownMenuProps) {
  const [showGrid, setShowGrid] = useState(true);
  const [density, setDensity] = useState("comfortable");

  const items: DropdownMenuItem[] = [
    { type: "label", label: texts.section },
    {
      type: "checkbox",
      id: "grid",
      label: texts.grid,
      checked: showGrid,
      onCheckedChange: setShowGrid,
    },
    { type: "separator" },
    {
      type: "radio-group",
      id: "density",
      label: texts.density,
      value: density,
      onValueChange: setDensity,
      items: [
        { id: "compact", label: texts.compact },
        { id: "comfortable", label: texts.comfortable },
        { id: "spacious", label: texts.spacious },
      ],
    },
  ];

  return (
    <div className="menu-stack">
      <DropdownMenu
        items={items}
        menuLabel={texts.menuLabel}
        trigger={<Button variant="secondary">{texts.trigger}</Button>}
      />
      <p className="menu-status">
        {texts.grid}: <code>{showGrid ? texts.on : texts.off}</code> · {texts.density}:{" "}
        <code>{density}</code>
      </p>
    </div>
  );
}
