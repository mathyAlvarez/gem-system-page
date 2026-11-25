import { Button } from "@gem-org/gem-system";
import { Vortex } from "@gem-org/gemffects/vortex";
import { VortexTile } from "./VortexTile.tsx";
import "./vortex-demo.css";

type AsChildVortexProps = {
  label: string;
};

export function AsChildVortex({ label }: AsChildVortexProps) {
  return (
    <VortexTile>
      <Vortex asChild variant="warp" intensity="lg">
        <Button size="lg">{label}</Button>
      </Vortex>
    </VortexTile>
  );
}
