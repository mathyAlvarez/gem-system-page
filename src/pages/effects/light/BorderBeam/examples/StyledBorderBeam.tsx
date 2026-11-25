import { BorderBeam } from "@gem-org/gemffects/border-beam";
import { BeamTile } from "./BeamTile.tsx";
import "./border-beam-demo.css";
import "./border-beam-overrides.css";

type StyledBorderBeamProps = {
  title: string;
  body: string;
};

export function StyledBorderBeam({ title, body }: StyledBorderBeamProps) {
  return (
    <BeamTile>
      <BorderBeam thickness={3} intensity="lg" className="beam-rainbow">
        <div className="border-beam-demo__link">
          <span className="border-beam-demo__link-title">{title}</span>
          <span className="border-beam-demo__link-body">{body}</span>
        </div>
      </BorderBeam>
    </BeamTile>
  );
}
