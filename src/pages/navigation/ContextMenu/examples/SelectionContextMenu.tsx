import { useState } from "react";
import { ContextMenu, type ContextMenuItem } from "@gem-org/gem-system";
import "./context-menu-demo.css";

type SelectionTexts = {
  title: string;
  hint: string;
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

type SelectionContextMenuProps = { texts: SelectionTexts };

export function SelectionContextMenu({ texts }: SelectionContextMenuProps) {
  const [showGrid, setShowGrid] = useState(true);
  const [density, setDensity] = useState("comfortable");

  const items: ContextMenuItem[] = [
    { type: "label", label: texts.section },
    { type: "checkbox", id: "grid", label: texts.grid, checked: showGrid, onCheckedChange: setShowGrid },
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
    <div className="ctx-stack">
      <ContextMenu items={items} menuLabel={texts.menuLabel}>
        <div className="ctx-surface ctx-surface--compact">
          <p className="ctx-surface__title">{texts.title}</p>
          <p className="ctx-surface__hint">{texts.hint}</p>
        </div>
      </ContextMenu>
      <p className="ctx-status">
        {texts.grid}: <code>{showGrid ? texts.on : texts.off}</code> · {texts.density}: <code>{density}</code>
      </p>
    </div>
  );
}
