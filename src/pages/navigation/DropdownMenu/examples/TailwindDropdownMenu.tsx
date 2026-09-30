import { Button, DropdownMenu, type DropdownMenuProps } from "@gem-org/gem-system";
import { cn } from "@/lib/cn";
import { actionItems, type DropdownMenuTexts } from "./demo.tsx";

function SoftDropdownMenu({ classNames, ...props }: DropdownMenuProps) {
  return (
    <DropdownMenu
      classNames={{
        ...classNames,
        menu: cn("rounded-xl border-0 p-2 shadow-xl", classNames?.menu),
        item: cn("rounded-lg", classNames?.item),
        separator: cn("mx-0 my-2", classNames?.separator),
        shortcut: cn("rounded bg-(--gem-color-bg-subtle) px-1.5 py-0.5", classNames?.shortcut),
      }}
      {...props}
    />
  );
}

type TailwindDropdownMenuProps = { texts: DropdownMenuTexts };

export function TailwindDropdownMenu({ texts }: TailwindDropdownMenuProps) {
  return (
    <SoftDropdownMenu
      items={actionItems(texts)}
      menuLabel={texts.menuLabel}
      trigger={<Button variant="secondary">{texts.trigger}</Button>}
    />
  );
}
