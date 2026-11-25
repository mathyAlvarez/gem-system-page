import { Tilt3D, type Tilt3DProps } from "@gem-org/gemffects/tilt-3d";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { TiltTile } from "./TiltTile.tsx";
import "./tilt-3d-demo.css";

const finishVariants = cva("rounded-[var(--gem-radius-md)]", {
  variants: {
    finish: {
      matte: "",
      gold: "[--gemfx-tilt3d-glare-color:var(--gem-palette-tertiary-300)]",
      ice: "[--gemfx-tilt3d-glare-color:var(--gem-palette-secondary-300)]",
    },
  },
  defaultVariants: { finish: "matte" },
});

type FinishTilt3DProps = Tilt3DProps & VariantProps<typeof finishVariants>;

export function FinishTilt3D({ finish, className, ...props }: FinishTilt3DProps) {
  return (
    <Tilt3D
      intensity="lg"
      glare={finish !== "matte"}
      className={cn(finishVariants({ finish }), className)}
      {...props}
    />
  );
}

export function VariantTilt3D() {
  return (
    <div className="tilt-demo">
      <TiltTile label='finish="matte"'>
        <FinishTilt3D finish="matte">
          <span className="tilt-demo__target">matte</span>
        </FinishTilt3D>
      </TiltTile>
      <TiltTile label='finish="gold"'>
        <FinishTilt3D finish="gold">
          <span className="tilt-demo__target">gold</span>
        </FinishTilt3D>
      </TiltTile>
      <TiltTile label='finish="ice"'>
        <FinishTilt3D finish="ice">
          <span className="tilt-demo__target">ice</span>
        </FinishTilt3D>
      </TiltTile>
    </div>
  );
}
