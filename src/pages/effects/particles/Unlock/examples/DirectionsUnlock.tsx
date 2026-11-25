import { Unlock } from "@gem-org/gemffects/unlock";
import { UNLOCK_DIRECTIONS } from "./demo.ts";
import { UnlockTile } from "./UnlockTile.tsx";
import "./unlock-demo.css";

export function DirectionsUnlock() {
  return (
    <div className="ul-demo">
      {UNLOCK_DIRECTIONS.map((direction) => (
        <UnlockTile key={direction} label={`direction="${direction}"`}>
          <Unlock direction={direction} className="ul-demo__host">
            <div className="ul-demo__card ul-demo__card--sm">{direction}</div>
          </Unlock>
        </UnlockTile>
      ))}
    </div>
  );
}
