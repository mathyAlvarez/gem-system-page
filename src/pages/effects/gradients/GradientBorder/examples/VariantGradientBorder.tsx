import { GradientBorder, type GradientBorderProps } from "@gem-org/gemffects/gradient-border";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { BorderTile } from "./BorderTile.tsx";
import "./gradient-border-demo.css";

const planVariants = cva("rounded-[var(--gem-radius-lg)]", {
  variants: {
    plan: {
      free: "[--gemfx-gradient-border-from:var(--gem-palette-neutral-500)] [--gemfx-gradient-border-via:var(--gem-palette-neutral-300)] [--gemfx-gradient-border-to:var(--gem-palette-neutral-600)]",
      pro: "[--gemfx-gradient-border-from:var(--gem-palette-primary-300)] [--gemfx-gradient-border-via:var(--gem-palette-secondary-400)] [--gemfx-gradient-border-to:var(--gem-palette-primary-500)]",
      team: "[--gemfx-gradient-border-from:var(--gem-palette-tertiary-300)] [--gemfx-gradient-border-via:var(--gem-palette-secondary-400)] [--gemfx-gradient-border-to:var(--gem-palette-warning-300)]",
    },
  },
  defaultVariants: { plan: "free" },
});

type PlanBorderProps = Omit<GradientBorderProps, "variant"> & VariantProps<typeof planVariants>;

/** Only paid plans animate. */
export function PlanBorder({ plan, className, ...props }: PlanBorderProps) {
  return (
    <GradientBorder
      variant={plan === "free" || plan == null ? "static" : "flow"}
      className={cn(planVariants({ plan }), className)}
      {...props}
    />
  );
}

export function VariantGradientBorder() {
  return (
    <div className="gb-demo">
      {(["free", "pro", "team"] as const).map((plan) => (
        <BorderTile key={plan} label={`plan="${plan}"`}>
          <PlanBorder plan={plan}>
            <span className="gb-demo__text">{plan}</span>
          </PlanBorder>
        </BorderTile>
      ))}
    </div>
  );
}
