import { Breadcrumbs, type BreadcrumbsProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { baseItems, type BreadcrumbTexts } from "./demo.ts";
import "./breadcrumbs-demo.css";

const trailVariants = cva("", {
  variants: {
    tone: {
      default: "",
      secondary:
        "[--gem-breadcrumbs-current:var(--gem-color-secondary-700)] [--gem-breadcrumbs-hover:var(--gem-color-secondary-600)]",
      neutral:
        "[--gem-breadcrumbs-current:var(--gem-color-fg)] [--gem-breadcrumbs-hover:var(--gem-color-fg)]",
    },
    surface: {
      none: "",
      card: "rounded-lg border border-(--gem-color-border) bg-(--gem-color-bg) px-3 py-2",
    },
  },
  defaultVariants: { tone: "default", surface: "none" },
});

type TrailProps = BreadcrumbsProps & VariantProps<typeof trailVariants>;

export function Trail({ tone, surface, className, ...props }: TrailProps) {
  return <Breadcrumbs className={cn(trailVariants({ tone, surface }), className)} {...props} />;
}

const variants = [
  { tone: "secondary", surface: "none" },
  { tone: "neutral", surface: "card" },
] as const;

type VariantBreadcrumbsProps = { texts: BreadcrumbTexts };

export function VariantBreadcrumbs({ texts }: VariantBreadcrumbsProps) {
  const items = baseItems(texts);

  return (
    <div className="crumbs-stack">
      {variants.map(({ tone, surface }) => (
        <div key={tone}>
          <p className="crumbs-caption">
            tone="{tone}" surface="{surface}"
          </p>
          <Trail
            tone={tone}
            surface={surface}
            items={items}
            navLabel={`${texts.navLabel} ${tone}`}
          />
        </div>
      ))}
    </div>
  );
}
