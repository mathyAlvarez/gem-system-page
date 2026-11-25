import { Button, DropdownMenu } from "@gem-org/gem-system";
import { actionItems, type DropdownMenuTexts } from "./demo.tsx";
import "./dropdown-menu-overrides.css";

type StyledDropdownMenuProps = { texts: DropdownMenuTexts };

export function StyledDropdownMenu({ texts }: StyledDropdownMenuProps) {
  return (
    <DropdownMenu
      className="menu-branded"
      items={actionItems(texts)}
      menuLabel={texts.menuLabel}
      trigger={<Button variant="secondary">{texts.trigger}</Button>}
    />
  );
}
