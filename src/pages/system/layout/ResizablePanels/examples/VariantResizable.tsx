import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanels,
  type ResizablePanelsProps,
} from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { Pane, type PaneText } from "./Pane.tsx";

const splitVariants = cva("", {
  variants: {
    tone: {
      neutral: "",
      primary:
        "border-(--gem-color-primary-300) [--gem-resizable-handle-bg:var(--gem-color-primary-200)] [--gem-resizable-handle-hover:var(--gem-color-primary-600)]",
      ghost:
        "border-transparent [--gem-resizable-handle-bg:transparent] [--gem-resizable-handle-hover:var(--gem-color-border)]",
    },
    elevated: {
      true: "shadow-lg",
      false: "",
    },
  },
  defaultVariants: { tone: "neutral", elevated: false },
});

type SplitProps = ResizablePanelsProps & VariantProps<typeof splitVariants>;

export function Split({ tone, elevated, className, ...props }: SplitProps) {
  return (
    <ResizablePanels className={cn(splitVariants({ tone, elevated }), className)} {...props} />
  );
}

const variants: VariantProps<typeof splitVariants>[] = [
  { tone: "primary", elevated: true },
  { tone: "ghost" },
];

type VariantResizablesProps = { start: PaneText; end: PaneText };

export function VariantResizables({ start, end }: VariantResizablesProps) {
  return (
    <div className="flex flex-col gap-4">
      {variants.map((variant) => {
        const label = Object.entries(variant)
          .map(([key, value]) => `${key}={${JSON.stringify(value)}}`)
          .join(" ");
        return (
          <div key={label}>
            <p className="resizable-caption">{label}</p>
            <Split height={160} {...variant}>
              <ResizablePanel>
                <Pane {...start} tone="muted" />
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel>
                <Pane {...end} />
              </ResizablePanel>
            </Split>
          </div>
        );
      })}
    </div>
  );
}
