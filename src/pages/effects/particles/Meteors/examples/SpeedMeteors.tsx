import { Meteors } from "@gem-org/gemffects/meteors";
import { MeteorTile } from "./MeteorTile.tsx";
import "./meteors-demo.css";

export function SpeedMeteors() {
  return (
    <div className="mt-demo">
      {[0.5, 1, 2.5].map((speed) => (
        <MeteorTile key={speed} label={`speed={${speed}}`}>
          <Meteors speed={speed} intensity="lg" className="mt-demo__host mt-demo__host--sm">
            <p className="mt-demo__copy">×{speed}</p>
          </Meteors>
        </MeteorTile>
      ))}
    </div>
  );
}
