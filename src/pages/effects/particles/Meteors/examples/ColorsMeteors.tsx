import { Meteors } from "@gem-org/gemffects/meteors";
import { MeteorTile } from "./MeteorTile.tsx";
import "./meteors-demo.css";

const COLORS = [
  "var(--gem-palette-primary-200)",
  "var(--gem-palette-tertiary-300)",
  "var(--gem-palette-secondary-300)",
];

export function ColorsMeteors() {
  return (
    <div className="mt-demo">
      {COLORS.map((color) => (
        <MeteorTile key={color} label={color}>
          <Meteors color={color} intensity="lg" className="mt-demo__host mt-demo__host--sm" />
        </MeteorTile>
      ))}
    </div>
  );
}
