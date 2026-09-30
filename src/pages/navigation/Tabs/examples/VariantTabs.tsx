import { Tabs, type TabsProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { baseItems, type TabsTexts } from "./demo.ts";
import "./tabs-demo.css";

const sectionTabsVariants = cva("", {
  variants: {
    tone: {
      default: "",
      secondary: "[--gem-tabs-indicator:var(--gem-color-secondary-600)] [--gem-tabs-selected:var(--gem-color-secondary-700)]",
      neutral: "[--gem-tabs-indicator:var(--gem-color-fg)] [--gem-tabs-selected:var(--gem-color-fg)]",
    },
    surface: {
      none: "",
      card: "rounded-lg border border-(--gem-color-border) bg-(--gem-color-bg) p-3",
    },
  },
  defaultVariants: { tone: "default", surface: "none" },
});

type SectionTabsProps = TabsProps & VariantProps<typeof sectionTabsVariants>;

export function SectionTabs({ tone, surface, className, ...props }: SectionTabsProps) {
  return <Tabs className={cn(sectionTabsVariants({ tone, surface }), className)} {...props} />;
}

const variants = [
  { tone: "secondary", surface: "none" },
  { tone: "neutral", surface: "card" },
] as const;

type VariantTabsProps = { texts: TabsTexts };

export function VariantTabs({ texts }: VariantTabsProps) {
  const items = baseItems(texts);

  return (
    <div className="tabs-stack">
      {variants.map(({ tone, surface }) => (
        <div key={tone}>
          <p className="tabs-caption">
            tone="{tone}" surface="{surface}"
          </p>
          <SectionTabs tone={tone} surface={surface} items={items} listLabel={`${texts.listLabel} ${tone}`} />
        </div>
      ))}
    </div>
  );
}
