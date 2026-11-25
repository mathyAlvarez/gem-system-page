import { Float } from "@gem-org/gemffects/float";
import { FloatTile } from "./FloatTile.tsx";
import "./float-demo.css";

export function TileFloat() {
  return (
    <FloatTile>
      <Float variant="drift" intensity="lg" duration={4200} className="float-demo__host">
        <span className="float-demo__tile" />
      </Float>
    </FloatTile>
  );
}
