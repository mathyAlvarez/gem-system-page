import { Button } from "@gem-org/gem-system";
import { Tilt3D } from "@gem-org/gemffects/tilt-3d";
import { TiltTile } from "./TiltTile.tsx";
import "./tilt-3d-demo.css";

type AsChildTilt3DProps = {
  label: string;
};

export function AsChildTilt3D({ label }: AsChildTilt3DProps) {
  return (
    <TiltTile>
      <Tilt3D asChild intensity="lg" perspective={400}>
        <Button size="lg">{label}</Button>
      </Tilt3D>
    </TiltTile>
  );
}
