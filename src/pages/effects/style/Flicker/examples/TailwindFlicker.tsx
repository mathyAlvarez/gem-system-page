import { Flicker } from "@gem-org/gemffects/flicker";
import { FlickerTile } from "./FlickerTile.tsx";
import "./flicker-demo.css";

type TailwindFlickerProps = {
  label: string;
};

export function TailwindFlicker({ label }: TailwindFlickerProps) {
  return (
    <FlickerTile>
      <Flicker
        variant="buzz"
        className="rounded-full [--gemfx-flicker-blur:2rem] [--gemfx-flicker-color:var(--gem-palette-error-400)]"
      >
        <span className="flicker-demo__target rounded-full">{label}</span>
      </Flicker>
    </FlickerTile>
  );
}
