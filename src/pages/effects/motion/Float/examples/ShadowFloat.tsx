import { Float } from "@gem-org/gemffects/float";
import { FloatTile } from "./FloatTile.tsx";
import "./float-demo.css";

export function ShadowFloat() {
  return (
    <div className="float-demo">
      <FloatTile label="shadow">
        <Float className="float-demo__host">
          <span className="float-demo__target">shadow</span>
        </Float>
      </FloatTile>
      <FloatTile label="shadow={false}">
        <Float shadow={false} className="float-demo__host">
          <span className="float-demo__target">shadow={"{false}"}</span>
        </Float>
      </FloatTile>
    </div>
  );
}
