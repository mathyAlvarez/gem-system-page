import { Unlock } from "@gem-org/gemffects/unlock";
import { UNLOCK_VARIANTS } from "./demo.ts";
import { UnlockTile } from "./UnlockTile.tsx";
import "./unlock-demo.css";

export function VariantsUnlock() {
  return (
    <div className="ul-demo">
      {UNLOCK_VARIANTS.map((variant) => (
        <UnlockTile key={variant} label={`variant="${variant}"`}>
          <Unlock variant={variant} className="ul-demo__host">
            <div className="ul-demo__card ul-demo__card--sm">{variant}</div>
          </Unlock>
        </UnlockTile>
      ))}
    </div>
  );
}
