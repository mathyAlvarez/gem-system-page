import { Button } from "@gem-org/gem-system";
import { Magnetic } from "@gem-org/gemffects/magnetic";
import { MagneticTile } from "./MagneticTile.tsx";
import "./magnetic-demo.css";

type AsChildMagneticProps = {
  label: string;
};

export function AsChildMagnetic({ label }: AsChildMagneticProps) {
  return (
    <MagneticTile field>
      <Magnetic asChild radius={24} intensity="lg">
        <Button size="lg">{label}</Button>
      </Magnetic>
    </MagneticTile>
  );
}
