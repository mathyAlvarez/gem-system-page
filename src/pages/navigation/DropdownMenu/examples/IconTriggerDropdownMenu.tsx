import { Button, DropdownMenu } from "@gem-org/gem-system";
import { MoreVertical } from "@gem-org/gem-system/icons";
import { actionItems, type DropdownMenuTexts } from "./demo.tsx";
import "./dropdown-menu-demo.css";

type IconTriggerDropdownMenuProps = { texts: DropdownMenuTexts; title: string };

export function IconTriggerDropdownMenu({ texts, title }: IconTriggerDropdownMenuProps) {
  return (
    <div className="menu-bar">
      <span>{title}</span>
      <DropdownMenu
        items={actionItems(texts)}
        menuLabel={texts.moreActions}
        placement="bottom-end"
        trigger={
          <Button variant="transparent" iconOnly aria-label={texts.moreActions}>
            <MoreVertical />
          </Button>
        }
      />
    </div>
  );
}
