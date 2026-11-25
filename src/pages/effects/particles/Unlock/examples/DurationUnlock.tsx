import { Unlock } from "@gem-org/gemffects/unlock";
import { UnlockTile } from "./UnlockTile.tsx";
import "./unlock-demo.css";

export function DurationUnlock() {
  return (
    <div className="ul-demo">
      {[280, 560, 900].map((duration) => (
        <UnlockTile key={duration} label={`duration={${duration}}`}>
          <Unlock duration={duration} className="ul-demo__host">
            <div className="ul-demo__card ul-demo__card--sm">{duration} ms</div>
          </Unlock>
        </UnlockTile>
      ))}
    </div>
  );
}
