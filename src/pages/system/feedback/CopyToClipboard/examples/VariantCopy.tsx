import { CopyToClipboard } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import type { CopyLabels } from "./demo.ts";
import "./copy-demo.css";

const chipVariants = cva("inline-flex items-center gap-2 font-mono", {
  variants: {
    appearance: {
      subtle: "rounded-md bg-(--gem-color-bg-subtle) text-(--gem-color-fg)",
      outline: "rounded-md border border-dashed border-(--gem-color-border) text-(--gem-color-fg)",
    },
    size: {
      sm: "py-0.5 pr-0.5 pl-2 text-xs",
      md: "py-1 pr-1 pl-3 text-sm",
    },
  },
  defaultVariants: { appearance: "subtle", size: "md" },
});

type CopyChipProps = VariantProps<typeof chipVariants> & {
  value: string;
  labels: CopyLabels;
  className?: string;
};

export function CopyChip({ value, labels, appearance, size, className }: CopyChipProps) {
  return (
    <span className={cn(chipVariants({ appearance, size }), className)}>
      {value}
      <CopyToClipboard value={value} size="sm" {...labels} />
    </span>
  );
}

type VariantCopyProps = { labels: CopyLabels };

export function VariantCopy({ labels }: VariantCopyProps) {
  return (
    <div className="copy-row">
      <CopyChip value="#0B816B" labels={labels} />
      <CopyChip value="--gem-color-primary-600" appearance="outline" labels={labels} />
      <CopyChip value="v2.4.0" size="sm" labels={labels} />
    </div>
  );
}
