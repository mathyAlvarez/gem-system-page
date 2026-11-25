import { BorderBeam } from "@gem-org/gemffects/border-beam";
import { BeamTile } from "./BeamTile.tsx";
import "./border-beam-demo.css";

type AsChildBorderBeamProps = {
  title: string;
  body: string;
};

export function AsChildBorderBeam({ title, body }: AsChildBorderBeamProps) {
  return (
    <BeamTile>
      <BorderBeam asChild variant="spark" trigger="hover">
        <button type="button" className="border-beam-demo__link">
          <span className="border-beam-demo__link-title">{title}</span>
          <span className="border-beam-demo__link-body">{body}</span>
        </button>
      </BorderBeam>
    </BeamTile>
  );
}
