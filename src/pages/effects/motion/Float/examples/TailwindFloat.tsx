import { Float } from "@gem-org/gemffects/float";
import { FloatTile } from "./FloatTile.tsx";
import "./float-demo.css";

type TailwindFloatProps = {
  label: string;
};

export function TailwindFloat({ label }: TailwindFloatProps) {
  return (
    <FloatTile>
      <Float
        variant="lift"
        className="rounded-full [--gemfx-float-shadow:var(--gem-palette-primary-400)]"
      >
        <span className="float-demo__target rounded-full">{label}</span>
      </Float>
    </FloatTile>
  );
}
