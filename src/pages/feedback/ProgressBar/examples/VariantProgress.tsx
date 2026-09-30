import { ProgressBar, type ProgressBarProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import "./progress-demo.css";

const rootVariants = cva("", {
  variants: {
    thickness: {
      default: "",
      thick: "[--gem-progress-h:1rem] [--gem-progress-radius:0.375rem]",
    },
  },
  defaultVariants: { thickness: "default" },
});

const fillVariants = cva("", {
  variants: {
    pattern: {
      solid: "",
      striped:
        "[background-image:repeating-linear-gradient(45deg,rgb(255_255_255/0.28)_0_0.5rem,transparent_0.5rem_1rem)]",
    },
  },
  defaultVariants: { pattern: "solid" },
});

type PatternProgressProps = ProgressBarProps & VariantProps<typeof rootVariants> & VariantProps<typeof fillVariants>;

export function PatternProgress({ thickness, pattern, className, classNames, ...props }: PatternProgressProps) {
  return (
    <ProgressBar
      className={cn(rootVariants({ thickness }), className)}
      classNames={{ ...classNames, fill: cn(fillVariants({ pattern }), classNames?.fill) }}
      {...props}
    />
  );
}

type VariantProgressProps = { label: string };

export function VariantProgress({ label }: VariantProgressProps) {
  return (
    <div className="progress-stack">
      <PatternProgress label={`${label} · pattern="striped"`} value={56} showValue pattern="striped" />
      <PatternProgress
        label={`${label} · thickness="thick"`}
        value={72}
        showValue
        tone="info"
        thickness="thick"
        pattern="striped"
      />
    </div>
  );
}
