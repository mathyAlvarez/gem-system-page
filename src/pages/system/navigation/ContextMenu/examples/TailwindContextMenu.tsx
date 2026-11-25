import { ContextMenu, type ContextMenuProps } from "@gem-org/gem-system";
import { cn } from "@/lib/cn";
import { actionItems, type ContextMenuTexts } from "./demo.tsx";
import "./context-menu-demo.css";

function SoftContextMenu({ classNames, ...props }: ContextMenuProps) {
  return (
    <ContextMenu
      classNames={{
        ...classNames,
        target: cn(
          "rounded-xl focus-visible:ring-2 focus-visible:ring-(--gem-color-primary-400)",
          classNames?.target,
        ),
        menu: cn("rounded-xl border-0 p-2 shadow-xl", classNames?.menu),
        item: cn("rounded-lg", classNames?.item),
        separator: cn("mx-0 my-2", classNames?.separator),
      }}
      {...props}
    />
  );
}

type TailwindContextMenuProps = { texts: ContextMenuTexts; title: string };

export function TailwindContextMenu({ texts, title }: TailwindContextMenuProps) {
  return (
    <SoftContextMenu items={actionItems(texts)} menuLabel={texts.menuLabel} className="w-full">
      <div className="ctx-surface">
        <p className="ctx-surface__title">{title}</p>
        <p className="ctx-surface__hint">{texts.hint}</p>
      </div>
    </SoftContextMenu>
  );
}
