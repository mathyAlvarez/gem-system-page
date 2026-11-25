import { Flicker } from "@gem-org/gemffects/flicker";
import { FlickerTile } from "./FlickerTile.tsx";
import "./flicker-demo.css";

type AsChildFlickerProps = {
  label: string;
};

export function AsChildFlicker({ label }: AsChildFlickerProps) {
  return (
    <FlickerTile>
      <Flicker asChild variant="text" color="var(--gem-palette-secondary-400)">
        <span className="flicker-demo__copy">{label}</span>
      </Flicker>
    </FlickerTile>
  );
}
