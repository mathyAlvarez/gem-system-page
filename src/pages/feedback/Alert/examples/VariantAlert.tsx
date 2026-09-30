import { Alert, type AlertProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import "./alert-demo.css";

const alertVariants = cva("", {
  variants: {
    tone: {
      status: "",
      neutral:
        "[--gem-alert-bg:var(--gem-color-bg-subtle)] [--gem-alert-fg:var(--gem-color-fg)] [--gem-alert-border:var(--gem-color-border)] [--gem-alert-accent:var(--gem-color-fg-muted)] [--gem-alert-icon:var(--gem-color-fg-muted)]",
      brand:
        "[--gem-alert-bg:color-mix(in_srgb,var(--gem-palette-secondary-500)_12%,transparent)] [--gem-alert-fg:var(--gem-color-fg)] [--gem-alert-border:var(--gem-palette-secondary-300)] [--gem-alert-accent:var(--gem-palette-secondary-500)] [--gem-alert-icon:var(--gem-palette-secondary-500)]",
    },
    accent: {
      start: "",
      top: "border-s-[1.5px] border-t-4 border-t-(--gem-alert-accent)",
    },
  },
  defaultVariants: { tone: "status", accent: "start" },
});

type ToneAlertProps = AlertProps & VariantProps<typeof alertVariants>;

export function ToneAlert({ tone, accent, className, ...props }: ToneAlertProps) {
  return <Alert className={cn(alertVariants({ tone, accent }), className)} {...props} />;
}

type VariantAlertProps = { neutral: string; brand: string };

export function VariantAlert({ neutral, brand }: VariantAlertProps) {
  return (
    <div className="alert-stack">
      <ToneAlert tone="neutral" title={`tone="neutral"`}>
        {neutral}
      </ToneAlert>
      <ToneAlert tone="brand" accent="top" title={`tone="brand" accent="top"`}>
        {brand}
      </ToneAlert>
    </div>
  );
}
