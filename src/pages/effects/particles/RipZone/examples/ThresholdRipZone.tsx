import { useState } from "react";
import { RipZone } from "@gem-org/gemffects/rip-zone";
import { ZoneTile } from "./ZoneTile.tsx";
import "./rip-zone-demo.css";

function ThresholdTile({ threshold }: { threshold: number }) {
  const [progress, setProgress] = useState(0);

  return (
    <ZoneTile label={`threshold={${threshold}} · ${Math.round(progress * 100)}%`}>
      <RipZone
        threshold={threshold}
        onProgress={(event) => setProgress(event.progress)}
        className="rz-demo__host"
      >
        <div className="rz-demo__target rz-demo__target--sm">{Math.round(threshold * 100)}%</div>
      </RipZone>
    </ZoneTile>
  );
}

export function ThresholdRipZone() {
  return (
    <div className="rz-demo">
      {[0.35, 0.62, 0.9].map((threshold) => (
        <ThresholdTile key={threshold} threshold={threshold} />
      ))}
    </div>
  );
}
