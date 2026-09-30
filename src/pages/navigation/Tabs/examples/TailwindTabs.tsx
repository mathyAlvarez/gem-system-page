import { Tabs, type TabsProps } from "@gem-org/gem-system";
import { cn } from "@/lib/cn";
import { baseItems, type TabsTexts } from "./demo.ts";
import "./tabs-demo.css";

function SegmentedTabs({ className, classNames, ...props }: TabsProps) {
  return (
    <Tabs
      variant="pills"
      className={cn("[--gem-tabs-indicator:var(--gem-color-fg)] [--gem-tabs-selected:var(--gem-color-fg)]", className)}
      classNames={{
        ...classNames,
        list: cn("w-fit rounded-full bg-(--gem-color-bg-subtle)", classNames?.list),
        tab: cn("uppercase tracking-wider", classNames?.tab),
        panel: cn("rounded-lg border border-(--gem-color-border) p-4", classNames?.panel),
      }}
      {...props}
    />
  );
}

type TailwindTabsProps = { texts: TabsTexts };

export function TailwindTabs({ texts }: TailwindTabsProps) {
  return <SegmentedTabs items={baseItems(texts)} size="sm" listLabel={texts.listLabel} />;
}
