import { Meteors } from "@gem-org/gemffects/meteors";
import { MeteorTile } from "./MeteorTile.tsx";
import "./meteors-demo.css";

export function ReverseMeteors() {
  return (
    <div className="mt-demo">
      {[false, true].map((reverse) => (
        <MeteorTile key={String(reverse)} label={`reverse={${reverse}}`}>
          <Meteors reverse={reverse} intensity="lg" className="mt-demo__host mt-demo__host--sm">
            <p className="mt-demo__copy">{reverse ? "←" : "→"}</p>
          </Meteors>
        </MeteorTile>
      ))}
    </div>
  );
}
