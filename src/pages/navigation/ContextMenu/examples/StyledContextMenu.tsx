import { ContextMenu } from "@gem-org/gem-system";
import { actionItems, type ContextMenuTexts } from "./demo.tsx";
import "./context-menu-demo.css";
import "./context-menu-overrides.css";

type StyledContextMenuProps = { texts: ContextMenuTexts; title: string };

export function StyledContextMenu({ texts, title }: StyledContextMenuProps) {
  return (
    <ContextMenu
      items={actionItems(texts)}
      menuLabel={texts.menuLabel}
      className="ctx-branded-target w-full"
      classNames={{ menu: "ctx-branded" }}
    >
      <div className="ctx-surface">
        <p className="ctx-surface__title">{title}</p>
        <p className="ctx-surface__hint">{texts.hint}</p>
      </div>
    </ContextMenu>
  );
}
