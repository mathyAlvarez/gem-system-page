import { Spinner, type SpinnerProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import "./spinner-demo.css";

const spinnerVariants = cva("", {
  variants: {
    surface: {
      none: "",
      pill: "rounded-full bg-(--gem-color-bg-subtle) px-3 py-1.5",
      card: "rounded-lg border border-(--gem-color-border) bg-(--gem-color-bg) p-4 shadow-sm",
    },
  },
  defaultVariants: { surface: "none" },
});

type SurfaceSpinnerProps = SpinnerProps & VariantProps<typeof spinnerVariants>;

export function SurfaceSpinner({ surface, className, ...props }: SurfaceSpinnerProps) {
  return <Spinner className={cn(spinnerVariants({ surface }), className)} {...props} />;
}

type VariantSpinnerProps = { label: string };

export function VariantSpinner({ label }: VariantSpinnerProps) {
  return (
    <div className="spinner-row">
      <SurfaceSpinner surface="pill" size="sm" label={label} />
      <SurfaceSpinner surface="card" size="xl" tone="secondary" labelPlacement="bottom" label={label} />
    </div>
  );
}
