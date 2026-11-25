import { Flicker } from "@gem-org/gemffects/flicker";
import { FlickerTile } from "./FlickerTile.tsx";
import "./flicker-demo.css";

type SignFlickerProps = {
  label: string;
};

export function SignFlicker({ label }: SignFlickerProps) {
  return (
    <FlickerTile>
      <Flicker className="flicker-demo__host">
        <span className="flicker-demo__target">{label}</span>
      </Flicker>
    </FlickerTile>
  );
}
