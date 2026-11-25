import { useState } from "react";
import { ContextMenu } from "@gem-org/gem-system";
import { actionItems, type ContextMenuTexts } from "./demo.tsx";
import "./context-menu-demo.css";

type BaseContextMenuProps = { texts: ContextMenuTexts; title: string; hint: string };

export function BaseContextMenu({ texts, title, hint }: BaseContextMenuProps) {
  const [lastAction, setLastAction] = useState<string | null>(null);

  return (
    <div className="ctx-stack">
      <ContextMenu items={actionItems(texts)} menuLabel={texts.menuLabel} onAction={setLastAction}>
        <div className="ctx-surface">
          <p className="ctx-surface__title">{title}</p>
          <p className="ctx-surface__hint">{hint}</p>
        </div>
      </ContextMenu>
      <p className="ctx-status">
        {texts.lastAction}: <code>{lastAction ?? texts.none}</code>
      </p>
    </div>
  );
}
