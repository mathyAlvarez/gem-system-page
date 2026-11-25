import { Unlock } from "@gem-org/gemffects/unlock";
import { UnlockTile } from "./UnlockTile.tsx";
import "./unlock-demo.css";

export function IntensityUnlock() {
  return (
    <div className="ul-demo">
      {(["sm", "md", "lg"] as const).map((intensity) => (
        <UnlockTile key={intensity} label={`intensity="${intensity}"`}>
          <Unlock intensity={intensity} gap={6} className="ul-demo__host">
            <div className="ul-demo__card ul-demo__card--sm">{intensity}</div>
          </Unlock>
        </UnlockTile>
      ))}
    </div>
  );
}
