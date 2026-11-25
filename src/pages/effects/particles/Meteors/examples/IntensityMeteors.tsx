import { Meteors } from "@gem-org/gemffects/meteors";
import { MeteorTile } from "./MeteorTile.tsx";
import "./meteors-demo.css";

export function IntensityMeteors() {
  return (
    <div className="mt-demo">
      {(["sm", "md", "lg"] as const).map((intensity) => (
        <MeteorTile key={intensity} label={`intensity="${intensity}"`}>
          <Meteors intensity={intensity} className="mt-demo__host mt-demo__host--sm">
            <p className="mt-demo__copy">{intensity}</p>
          </Meteors>
        </MeteorTile>
      ))}
    </div>
  );
}
