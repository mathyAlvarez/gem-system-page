import { Float } from "@gem-org/gemffects/float";
import { FloatTile } from "./FloatTile.tsx";
import "./float-demo.css";
import "./float-overrides.css";

type StyledFloatProps = {
  label: string;
};

export function StyledFloat({ label }: StyledFloatProps) {
  return (
    <FloatTile>
      <Float variant="orbit" duration={4000} className="float-hologram">
        <span className="float-demo__target">{label}</span>
      </Float>
    </FloatTile>
  );
}
