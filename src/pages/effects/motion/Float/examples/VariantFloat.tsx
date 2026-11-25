import { Float, type FloatProps } from "@gem-org/gemffects/float";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { FloatTile } from "./FloatTile.tsx";
import "./float-demo.css";

const groundVariants = cva("rounded-[var(--gem-radius-md)]", {
  variants: {
    ground: {
      neutral: "",
      primary: "[--gemfx-float-shadow:var(--gem-palette-primary-400)]",
      tertiary: "[--gemfx-float-shadow:var(--gem-palette-tertiary-400)]",
    },
  },
  defaultVariants: { ground: "neutral" },
});

type GroundFloatProps = FloatProps & VariantProps<typeof groundVariants>;

export function GroundFloat({ ground, className, ...props }: GroundFloatProps) {
  return <Float className={cn(groundVariants({ ground }), className)} {...props} />;
}

export function VariantFloat() {
  return (
    <div className="float-demo">
      <FloatTile label='ground="primary"'>
        <GroundFloat ground="primary">
          <span className="float-demo__target">primary</span>
        </GroundFloat>
      </FloatTile>
      <FloatTile label='ground="tertiary"'>
        <GroundFloat ground="tertiary" variant="drift">
          <span className="float-demo__target">tertiary</span>
        </GroundFloat>
      </FloatTile>
    </div>
  );
}
