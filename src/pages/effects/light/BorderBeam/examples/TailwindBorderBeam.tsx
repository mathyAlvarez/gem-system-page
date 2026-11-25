import { BorderBeam } from "@gem-org/gemffects/border-beam";
import { BeamTile } from "./BeamTile.tsx";
import "./border-beam-demo.css";

type TailwindBorderBeamProps = {
  label: string;
};

export function TailwindBorderBeam({ label }: TailwindBorderBeamProps) {
  return (
    <BeamTile>
      <BorderBeam
        variant="track"
        className="rounded-full [--gemfx-border-beam-color:var(--gem-palette-secondary-400)] [--gemfx-border-beam-color-alt:var(--gem-palette-tertiary-400)]"
      >
        <span className="border-beam-demo__target rounded-full">{label}</span>
      </BorderBeam>
    </BeamTile>
  );
}
