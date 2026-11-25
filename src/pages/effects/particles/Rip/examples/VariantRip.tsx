import type { ReactNode } from "react";
import { Rip, type RipProps } from "@gem-org/gemffects/rip";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { RipTile } from "./RipTile.tsx";
import "./rip-demo.css";

const materialVariants = cva("rp-demo__target rp-demo__target--sm", {
  variants: {
    material: {
      paper:
        "bg-[linear-gradient(145deg,var(--gem-palette-tertiary-300),var(--gem-palette-tertiary-600))]",
      metal:
        "bg-[linear-gradient(145deg,var(--gem-palette-neutral-300),var(--gem-palette-neutral-700))]",
      beast:
        "bg-[linear-gradient(145deg,var(--gem-palette-secondary-500),var(--gem-palette-error-500))]",
    },
  },
  defaultVariants: { material: "paper" },
});

const materialRip = {
  paper: {
    variant: "tear",
    particle: "confetti",
    veilColor: "var(--gem-palette-neutral-50)",
    color: "var(--gem-palette-neutral-400)",
  },
  metal: { variant: "slash", particle: "spark", veilColor: "var(--gem-palette-neutral-800)" },
  beast: {
    variant: "claw",
    particle: "star",
    veilColor: "var(--gem-palette-secondary-900)",
    color: "var(--gem-palette-secondary-300)",
  },
} as const satisfies Record<string, Partial<RipProps>>;

type MaterialRipProps = Omit<RipProps, "variant" | "children"> &
  VariantProps<typeof materialVariants> & { children: ReactNode };

/** Each material picks the cut, the debris and the veil, and paints the card underneath. */
export function MaterialRip({ material, className, children, ...props }: MaterialRipProps) {
  return (
    <Rip {...materialRip[material ?? "paper"]} trigger="click" {...props}>
      <div className={cn(materialVariants({ material }), className)}>{children}</div>
    </Rip>
  );
}

export function VariantRip() {
  return (
    <div className="rp-demo">
      {(["paper", "metal", "beast"] as const).map((material) => (
        <RipTile key={material} label={`material="${material}"`}>
          <MaterialRip material={material}>{material}</MaterialRip>
        </RipTile>
      ))}
    </div>
  );
}
