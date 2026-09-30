import { useState } from "react";
import { Button, DropdownMenu } from "@gem-org/gem-system";
import { actionItems, type DropdownMenuTexts } from "./demo.tsx";
import "./dropdown-menu-demo.css";

type BaseDropdownMenuProps = { texts: DropdownMenuTexts };

export function BaseDropdownMenu({ texts }: BaseDropdownMenuProps) {
  const [lastAction, setLastAction] = useState<string | null>(null);

  return (
    <div className="menu-stack">
      <DropdownMenu
        items={actionItems(texts)}
        menuLabel={texts.menuLabel}
        trigger={<Button variant="secondary">{texts.trigger}</Button>}
        onAction={setLastAction}
      />
      <p className="menu-status">
        {texts.lastAction}: <code>{lastAction ?? texts.none}</code>
      </p>
    </div>
  );
}
