import { useState } from "react";
import { ContextMenu, type ContextMenuItem } from "@gem-org/gem-system";
import { Edit, File, Trash } from "@gem-org/gem-system/icons";
import "./context-menu-demo.css";

type ListTexts = {
  menuLabel: string;
  files: string[];
  open: string;
  rename: string;
  delete: string;
  lastAction: string;
  none: string;
};

type ListContextMenuProps = { texts: ListTexts };

export function ListContextMenu({ texts }: ListContextMenuProps) {
  const [last, setLast] = useState<string | null>(null);

  const items: ContextMenuItem[] = [
    { id: "open", label: texts.open, icon: <File size="sm" /> },
    { id: "rename", label: texts.rename, icon: <Edit size="sm" /> },
    { type: "separator" },
    { id: "delete", label: texts.delete, icon: <Trash size="sm" />, danger: true },
  ];

  return (
    <div className="ctx-stack">
      <ul className="ctx-list">
        {texts.files.map((name) => (
          <li key={name}>
            <ContextMenu
              items={items}
              menuLabel={`${texts.menuLabel}: ${name}`}
              closeOnLeave={false}
              className="ctx-list__row flex"
              onAction={(id) => setLast(`${name} · ${id}`)}
            >
              <File size="sm" />
              {name}
            </ContextMenu>
          </li>
        ))}
      </ul>
      <p className="ctx-status">
        {texts.lastAction}: <code>{last ?? texts.none}</code>
      </p>
    </div>
  );
}
