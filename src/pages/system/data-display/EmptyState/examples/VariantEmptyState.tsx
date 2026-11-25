import { EmptyState, type EmptyStateProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import type { EmptyStateCopy } from "./demo.ts";
import "./empty-state-demo.css";

const emptyStateVariants = cva("", {
  variants: {
    surface: {
      plain: "",
      muted: "bg-(--gem-color-bg-subtle) rounded-(--gem-radius-lg)",
      danger:
        "bg-(--gem-color-error-50) rounded-(--gem-radius-lg) [--gem-empty-state-icon-bg:var(--gem-color-error-100)] [--gem-empty-state-icon-fg:var(--gem-color-error-700)]",
    },
    compact: {
      true: "[--gem-empty-state-pad:var(--gem-space-4)] [--gem-empty-state-gap:var(--gem-space-2)]",
      false: "",
    },
  },
  defaultVariants: { surface: "plain", compact: false },
});

type PanelEmptyStateProps = EmptyStateProps & VariantProps<typeof emptyStateVariants>;

export function PanelEmptyState({ surface, compact, className, ...props }: PanelEmptyStateProps) {
  return (
    <EmptyState className={cn(emptyStateVariants({ surface, compact }), className)} {...props} />
  );
}

type VariantEmptyStateProps = { muted: EmptyStateCopy; danger: EmptyStateCopy };

export function VariantEmptyState({ muted, danger }: VariantEmptyStateProps) {
  return (
    <div className="empty-state-demo">
      <PanelEmptyState surface="muted" {...muted} />
      <PanelEmptyState surface="danger" compact size="sm" {...danger} />
    </div>
  );
}
