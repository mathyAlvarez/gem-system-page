import { BorderBeam } from "@gem-org/gemffects/border-beam";
import { BeamTile } from "./BeamTile.tsx";
import "./border-beam-demo.css";

const loops = [
  { label: "duration={1800}", duration: 1800, reverse: false },
  { label: "duration={7200}", duration: 7200, reverse: false },
  { label: "reverse", duration: 3600, reverse: true },
];

export function MotionBorderBeam() {
  return (
    <div className="border-beam-demo">
      {loops.map(({ label, duration, reverse }) => (
        <BeamTile key={label} label={label}>
          <BorderBeam duration={duration} reverse={reverse} className="border-beam-demo__host">
            <span className="border-beam-demo__target">{reverse ? "↺" : `${duration} ms`}</span>
          </BorderBeam>
        </BeamTile>
      ))}
    </div>
  );
}
