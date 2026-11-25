import { Pagination, type PaginationProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { paginationLabels, type PaginationTexts } from "./demo.ts";
import "./pagination-demo.css";

const pagerVariants = cva("", {
  variants: {
    tone: {
      default: "",
      secondary:
        "[--gem-pagination-accent:var(--gem-color-secondary-600)] [--gem-pagination-accent-hover:var(--gem-color-secondary-700)] [--gem-pagination-hover:var(--gem-color-secondary-200)]",
      neutral:
        "[--gem-pagination-accent:var(--gem-color-fg)] [--gem-pagination-accent-hover:var(--gem-color-fg)] [--gem-pagination-hover:var(--gem-color-bg-subtle)]",
    },
    surface: {
      none: "",
      card: "rounded-lg border border-(--gem-color-border) bg-(--gem-color-bg-subtle) p-3",
    },
  },
  defaultVariants: { tone: "default", surface: "none" },
});

type PagerProps = PaginationProps & VariantProps<typeof pagerVariants>;

export function Pager({ tone, surface, className, ...props }: PagerProps) {
  return <Pagination className={cn(pagerVariants({ tone, surface }), className)} {...props} />;
}

const variants = [
  { tone: "secondary", surface: "none" },
  { tone: "neutral", surface: "card" },
] as const;

type VariantPaginationProps = { texts: PaginationTexts };

export function VariantPagination({ texts }: VariantPaginationProps) {
  const labels = paginationLabels(texts);

  return (
    <div className="pager-stack">
      {variants.map(({ tone, surface }) => (
        <div key={tone}>
          <p className="pager-caption">
            tone="{tone}" surface="{surface}"
          </p>
          <Pager
            {...labels}
            tone={tone}
            surface={surface}
            total={87}
            navLabel={`${labels.navLabel} ${tone}`}
          />
        </div>
      ))}
    </div>
  );
}
