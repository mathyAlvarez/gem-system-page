import { Magnetic, type MagneticProps } from "@gem-org/gemffects/magnetic";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { MagneticTile } from "./MagneticTile.tsx";
import "./magnetic-demo.css";

const emphasisVariants = cva("rounded-[var(--gem-radius-md)]", {
  variants: {
    emphasis: {
      none: "",
      lift: "[.gemfx-magnetic--tracking_&]:scale-105",
      glow: "[.gemfx-magnetic--tracking_&]:shadow-[0_0_1.25rem_var(--gem-palette-tertiary-400)]",
    },
  },
  defaultVariants: { emphasis: "none" },
});

type EmphasisMagneticProps = MagneticProps & VariantProps<typeof emphasisVariants>;

export function EmphasisMagnetic({ emphasis, classNames, ...props }: EmphasisMagneticProps) {
  return (
    <Magnetic
      classNames={{
        ...classNames,
        surface: cn(emphasisVariants({ emphasis }), classNames?.surface),
      }}
      {...props}
    />
  );
}

export function VariantMagnetic() {
  return (
    <div className="magnetic-demo">
      <MagneticTile label='emphasis="lift"'>
        <EmphasisMagnetic emphasis="lift" className="magnetic-demo__host">
          <span className="magnetic-demo__target">lift</span>
        </EmphasisMagnetic>
      </MagneticTile>
      <MagneticTile label='emphasis="glow"'>
        <EmphasisMagnetic emphasis="glow" className="magnetic-demo__host">
          <span className="magnetic-demo__target">glow</span>
        </EmphasisMagnetic>
      </MagneticTile>
    </div>
  );
}
