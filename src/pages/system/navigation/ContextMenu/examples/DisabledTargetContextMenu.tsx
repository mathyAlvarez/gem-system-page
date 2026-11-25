import { ContextMenu } from "@gem-org/gem-system";
import { actionItems, type ContextMenuTexts } from "./demo.tsx";
import "./context-menu-demo.css";

type DisabledTargetContextMenuProps = { texts: ContextMenuTexts; title: string; hint: string };

export function DisabledTargetContextMenu({ texts, title, hint }: DisabledTargetContextMenuProps) {
  return (
    <ContextMenu
      items={actionItems(texts)}
      menuLabel={texts.menuLabel}
      isDisabled
      className="w-full"
    >
      <div className="ctx-surface ctx-surface--compact">
        <p className="ctx-surface__title">{title}</p>
        <p className="ctx-surface__hint">{hint}</p>
      </div>
    </ContextMenu>
  );
}
