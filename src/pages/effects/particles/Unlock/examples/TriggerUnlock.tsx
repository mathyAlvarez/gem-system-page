import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { Unlock } from "@gem-org/gemffects/unlock";
import { UNLOCK_TRIGGERS } from "./demo.ts";
import { UnlockTile } from "./UnlockTile.tsx";
import "./unlock-demo.css";

type TriggerUnlockProps = {
  remount: string;
};

export function TriggerUnlock({ remount }: TriggerUnlockProps) {
  const [mountKey, setMountKey] = useState(0);

  return (
    <>
      <div className="ul-demo__controls">
        <Button size="sm" variant="neutral" onClick={() => setMountKey((current) => current + 1)}>
          {remount}
        </Button>
      </div>
      <div className="ul-demo">
        {UNLOCK_TRIGGERS.map((trigger) => (
          <UnlockTile key={trigger} label={`trigger="${trigger}"`}>
            <Unlock
              key={trigger === "always" ? mountKey : trigger}
              trigger={trigger}
              className="ul-demo__host"
            >
              <div className="ul-demo__card ul-demo__card--sm">{trigger}</div>
            </Unlock>
          </UnlockTile>
        ))}
      </div>
    </>
  );
}
