import { Magnetic } from "@gem-org/gemffects/magnetic";
import { MagneticTile } from "./MagneticTile.tsx";
import "./magnetic-demo.css";

type TailwindMagneticProps = {
  label: string;
};

export function TailwindMagnetic({ label }: TailwindMagneticProps) {
  return (
    <MagneticTile>
      <Magnetic
        className="rounded-full"
        classNames={{
          surface:
            "rounded-full [.gemfx-magnetic--tracking_&]:shadow-[0_0_1.5rem_var(--gem-palette-primary-400)]",
        }}
      >
        <span className="magnetic-demo__pill">{label}</span>
      </Magnetic>
    </MagneticTile>
  );
}
