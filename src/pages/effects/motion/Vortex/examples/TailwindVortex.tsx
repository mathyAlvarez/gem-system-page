import { Vortex } from "@gem-org/gemffects/vortex";
import { VortexTile } from "./VortexTile.tsx";
import "./vortex-demo.css";

type TailwindVortexProps = {
  label: string;
};

export function TailwindVortex({ label }: TailwindVortexProps) {
  return (
    <VortexTile>
      <Vortex
        trigger="always"
        intensity="lg"
        className="rounded-[var(--gem-radius-xl)] [--gemfx-vortex-color:var(--gem-palette-tertiary-300)]"
        classNames={{ swirl: "mix-blend-screen" }}
      >
        <div className="vortex-demo__tile rounded-[var(--gem-radius-xl)]">{label}</div>
      </Vortex>
    </VortexTile>
  );
}
