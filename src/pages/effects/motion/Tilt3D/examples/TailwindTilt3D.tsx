import { Tilt3D } from "@gem-org/gemffects/tilt-3d";
import { TiltTile } from "./TiltTile.tsx";
import "./tilt-3d-demo.css";

type TailwindTilt3DProps = {
  label: string;
};

export function TailwindTilt3D({ label }: TailwindTilt3DProps) {
  return (
    <TiltTile>
      <Tilt3D
        intensity="lg"
        className="rounded-[var(--gem-radius-lg)] [--gemfx-tilt3d-glare-color:var(--gem-palette-primary-300)]"
        classNames={{
          surface:
            "rounded-[var(--gem-radius-lg)] [.gemfx-tilt3d--tracking_&]:shadow-[0_1.5rem_3rem_-1rem_var(--gem-palette-primary-500)]",
        }}
      >
        <span className="tilt-demo__target rounded-[var(--gem-radius-lg)]">{label}</span>
      </Tilt3D>
    </TiltTile>
  );
}
