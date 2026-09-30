import { ContextMenu, type ContextMenuSize } from "@gem-org/gem-system";
import { actionItems, type ContextMenuTexts } from "./demo.tsx";
import "./context-menu-demo.css";

const sizes: ContextMenuSize[] = ["sm", "md", "lg"];

type SizesContextMenuProps = { texts: ContextMenuTexts };

export function SizesContextMenu({ texts }: SizesContextMenuProps) {
  const items = actionItems(texts).slice(0, 3);

  return (
    <div className="ctx-row">
      {sizes.map((size) => (
        <ContextMenu key={size} items={items} size={size} menuLabel={`${texts.menuLabel} ${size}`}>
          <div className="ctx-surface ctx-surface--compact">
            <p className="ctx-caption">size="{size}"</p>
            <p className="ctx-surface__hint">{texts.hint}</p>
          </div>
        </ContextMenu>
      ))}
    </div>
  );
}
