import { Meteors } from "@gem-org/gemffects/meteors";
import { MeteorTile } from "./MeteorTile.tsx";
import "./meteors-demo.css";

export function CountMeteors() {
  return (
    <div className="mt-demo">
      {[4, 14, 40].map((count) => (
        <MeteorTile key={count} label={`count={${count}}`}>
          <Meteors count={count} className="mt-demo__host mt-demo__host--sm">
            <p className="mt-demo__copy">{count}</p>
          </Meteors>
        </MeteorTile>
      ))}
    </div>
  );
}
