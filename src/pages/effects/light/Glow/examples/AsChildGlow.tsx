import { Button } from "@gem-org/gem-system";
import { Glow } from "@gem-org/gemffects/glow";
import { GlowTile } from "./GlowTile.tsx";
import "./glow-demo.css";

type AsChildGlowProps = {
  label: string;
};

export function AsChildGlow({ label }: AsChildGlowProps) {
  return (
    <GlowTile>
      <Glow asChild spread={16}>
        <Button>{label}</Button>
      </Glow>
    </GlowTile>
  );
}
