import type { ReactNode } from "react";
import { Ripple, type RippleProps } from "@gem-org/gemffects/ripple";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { RippleTile } from "./RippleTile.tsx";
import "./ripple-demo.css";

const actionVariants = cva("rl-demo__target rl-demo__host", {
  variants: {
    tone: {
      neutral: "",
      primary:
        "border-[var(--gem-palette-primary-600)] bg-[var(--gem-palette-primary-600)] text-[color:var(--gem-palette-neutral-0)]",
      danger:
        "border-[var(--gem-palette-error-500)] bg-transparent text-[color:var(--gem-palette-error-500)]",
    },
  },
  defaultVariants: { tone: "neutral" },
});

const actionRipple = {
  neutral: { variant: "ink" },
  primary: { variant: "ink", color: "var(--gem-palette-neutral-0)", intensity: "sm" },
  danger: { variant: "ring", color: "var(--gem-palette-error-500)", intensity: "lg" },
} as const satisfies Record<string, Partial<RippleProps>>;

type ActionRippleProps = Omit<RippleProps, "variant" | "children" | "asChild"> &
  VariantProps<typeof actionVariants> & { children: ReactNode };

/** Each tone picks the wave and paints the button. */
export function ActionRipple({ tone, className, children, ...props }: ActionRippleProps) {
  return (
    <Ripple asChild {...actionRipple[tone ?? "neutral"]} {...props}>
      <button type="button" className={cn(actionVariants({ tone }), className)}>
        {children}
      </button>
    </Ripple>
  );
}

export function VariantRipple() {
  return (
    <div className="rl-demo">
      {(["neutral", "primary", "danger"] as const).map((tone) => (
        <RippleTile key={tone} label={`tone="${tone}"`}>
          <ActionRipple tone={tone}>{tone}</ActionRipple>
        </RippleTile>
      ))}
    </div>
  );
}
