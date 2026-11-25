import { Rip } from "@gem-org/gemffects/rip";
import { RipTile } from "./RipTile.tsx";
import "./rip-demo.css";

const party = [
  "var(--gem-palette-primary-300)",
  "var(--gem-palette-secondary-300)",
  "var(--gem-palette-tertiary-300)",
];

export function ColorsRip() {
  return (
    <div className="rp-demo">
      <RipTile label='color="…tertiary-300"'>
        <Rip
          color="var(--gem-palette-tertiary-300)"
          variant="slash"
          trigger="click"
          className="rp-demo__host"
        >
          <div className="rp-demo__target rp-demo__target--sm">color</div>
        </Rip>
      </RipTile>
      <RipTile label='veilColor="…secondary-900"'>
        <Rip veilColor="var(--gem-palette-secondary-900)" trigger="click" className="rp-demo__host">
          <div className="rp-demo__target rp-demo__target--sm">veilColor</div>
        </Rip>
      </RipTile>
      <RipTile label="colors={party}">
        <Rip
          colors={party}
          particle="confetti"
          variant="slash"
          trigger="click"
          className="rp-demo__host"
        >
          <div className="rp-demo__target rp-demo__target--sm">colors</div>
        </Rip>
      </RipTile>
    </div>
  );
}
