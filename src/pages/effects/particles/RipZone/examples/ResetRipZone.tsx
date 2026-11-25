import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { RipZone } from "@gem-org/gemffects/rip-zone";
import "./rip-zone-demo.css";

type ResetRipZoneProps = {
  reset: string;
  /** Uses `{progress}` as the placeholder. */
  status: string;
  done: string;
  title: string;
};

export function ResetRipZone({ reset, status, done, title }: ResetRipZoneProps) {
  const [resetKey, setResetKey] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const refill = () => {
    setResetKey((current) => current + 1);
    setProgress(0);
    setIsComplete(false);
  };

  return (
    <>
      <div className="rz-demo__controls">
        <Button size="sm" variant="neutral" onClick={refill}>
          {reset}
        </Button>
        <p className="rz-demo__status" aria-live="polite">
          {isComplete ? done : status.replace("{progress}", String(Math.round(progress * 100)))}
        </p>
      </div>
      <RipZone
        resetKey={resetKey}
        onProgress={(event) => setProgress(event.progress)}
        onComplete={() => setIsComplete(true)}
        className="rz-demo__host"
      >
        <div className="rz-demo__target">
          <p className="rz-demo__title">{title}</p>
        </div>
      </RipZone>
    </>
  );
}
