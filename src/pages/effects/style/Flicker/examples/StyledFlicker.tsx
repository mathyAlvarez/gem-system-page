import { Flicker } from "@gem-org/gemffects/flicker";
import { FlickerTile } from "./FlickerTile.tsx";
import "./flicker-demo.css";
import "./flicker-overrides.css";

type StyledFlickerProps = {
  label: string;
};

export function StyledFlicker({ label }: StyledFlickerProps) {
  return (
    <FlickerTile>
      <Flicker variant="buzz" edge="bottom" spread={28} className="flicker-bar">
        <span className="flicker-demo__copy">{label}</span>
      </Flicker>
    </FlickerTile>
  );
}
