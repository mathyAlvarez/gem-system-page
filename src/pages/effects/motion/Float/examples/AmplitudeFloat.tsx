import { Float } from "@gem-org/gemffects/float";
import { FloatTile } from "./FloatTile.tsx";
import "./float-demo.css";

const amplitudes = [4, 24, "1.25rem"];

export function AmplitudeFloat() {
  return (
    <div className="float-demo">
      {amplitudes.map((amplitude) => (
        <FloatTile
          key={amplitude}
          label={
            typeof amplitude === "number" ? `amplitude={${amplitude}}` : `amplitude="${amplitude}"`
          }
        >
          <Float amplitude={amplitude} className="float-demo__host">
            <span className="float-demo__target">{amplitude}</span>
          </Float>
        </FloatTile>
      ))}
    </div>
  );
}
