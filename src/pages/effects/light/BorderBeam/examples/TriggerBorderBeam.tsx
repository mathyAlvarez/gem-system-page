import { BorderBeam } from "@gem-org/gemffects/border-beam";
import { BeamTile } from "./BeamTile.tsx";
import "./border-beam-demo.css";

type TriggerBorderBeamProps = {
  hoverLabel: string;
  clickLabel: string;
};

export function TriggerBorderBeam({ hoverLabel, clickLabel }: TriggerBorderBeamProps) {
  return (
    <div className="border-beam-demo">
      <BeamTile label='trigger="hover"'>
        <BorderBeam trigger="hover" className="border-beam-demo__host">
          <span className="border-beam-demo__target">{hoverLabel}</span>
        </BorderBeam>
      </BeamTile>
      <BeamTile label='trigger="click"'>
        <BorderBeam trigger="click" asChild className="border-beam-demo__host">
          <button type="button" className="border-beam-demo__target">
            {clickLabel}
          </button>
        </BorderBeam>
      </BeamTile>
    </div>
  );
}
