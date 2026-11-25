import { Button, DropdownMenu, type DropdownMenuSize } from "@gem-org/gem-system";
import { actionItems, type DropdownMenuTexts } from "./demo.tsx";
import "./dropdown-menu-demo.css";

const sizes: DropdownMenuSize[] = ["sm", "md", "lg"];

type SizesDropdownMenuProps = { texts: DropdownMenuTexts };

export function SizesDropdownMenu({ texts }: SizesDropdownMenuProps) {
  const items = actionItems(texts);

  return (
    <div className="menu-row">
      {sizes.map((size) => (
        <div key={size} className="menu-stack">
          <p className="menu-caption">size="{size}"</p>
          <DropdownMenu
            items={items}
            size={size}
            menuLabel={`${texts.menuLabel} ${size}`}
            trigger={
              <Button variant="secondary" size={size}>
                {texts.trigger}
              </Button>
            }
          />
        </div>
      ))}
    </div>
  );
}
