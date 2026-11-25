import { Glow } from "@gem-org/gemffects/glow";
import { GlowTile } from "./GlowTile.tsx";
import "./glow-demo.css";

type TailwindGlowProps = {
  label: string;
};

export function TailwindGlow({ label }: TailwindGlowProps) {
  return (
    <GlowTile>
      <Glow
        spread={32}
        className="rounded-full [--gemfx-glow-blur:2.25rem] [--gemfx-glow-color:var(--gem-palette-secondary-400)]"
      >
        <span className="glow-demo__target rounded-full">{label}</span>
      </Glow>
    </GlowTile>
  );
}
