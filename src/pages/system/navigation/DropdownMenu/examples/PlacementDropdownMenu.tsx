import { Button, DropdownMenu, type DropdownMenuPlacement } from "@gem-org/gem-system";
import { actionItems, type DropdownMenuTexts } from "./demo.tsx";
import "./dropdown-menu-demo.css";

const placements: DropdownMenuPlacement[] = [
  "bottom-start",
  "bottom",
  "bottom-end",
  "top-start",
  "top",
  "top-end",
];

type PlacementDropdownMenuProps = { texts: DropdownMenuTexts };

export function PlacementDropdownMenu({ texts }: PlacementDropdownMenuProps) {
  const items = actionItems(texts).slice(0, 3);

  return (
    <div className="menu-row">
      {placements.map((placement) => (
        <DropdownMenu
          key={placement}
          items={items}
          placement={placement}
          menuLabel={`${texts.menuLabel} ${placement}`}
          trigger={
            <Button variant="secondary" size="sm">
              {placement}
            </Button>
          }
        />
      ))}
    </div>
  );
}
