import { Unlock } from "@gem-org/gemffects/unlock";
import { UnlockTile } from "./UnlockTile.tsx";
import "./unlock-demo.css";

export function GapUnlock() {
  return (
    <div className="ul-demo">
      {[0, 6, 16].map((gap) => (
        <UnlockTile key={gap} label={`gap={${gap}}`}>
          <Unlock gap={gap} className="ul-demo__host">
            <div className="ul-demo__card ul-demo__card--sm">{gap}px</div>
          </Unlock>
        </UnlockTile>
      ))}
    </div>
  );
}
