import { Flicker } from "@gem-org/gemffects/flicker";
import { FlickerTile } from "./FlickerTile.tsx";
import "./flicker-demo.css";

type TextFlickerProps = {
  label: string;
};

export function TextFlicker({ label }: TextFlickerProps) {
  return (
    <FlickerTile>
      <Flicker variant="text" color="var(--gem-palette-secondary-400)">
        <span className="flicker-demo__copy flicker-demo__copy--lg">{label}</span>
      </Flicker>
    </FlickerTile>
  );
}
