import { Unlock } from "@gem-org/gemffects/unlock";
import { UnlockTile } from "./UnlockTile.tsx";
import "./unlock-demo.css";

const TIMINGS = [
  { delay: 0, stagger: 0 },
  { delay: 0, stagger: 200 },
  { delay: 300, stagger: 40 },
];

export function StaggerUnlock() {
  return (
    <div className="ul-demo">
      {TIMINGS.map(({ delay, stagger }) => (
        <UnlockTile key={`${delay}-${stagger}`} label={`delay={${delay}} stagger={${stagger}}`}>
          <Unlock delay={delay} stagger={stagger} duration={700} className="ul-demo__host">
            <div className="ul-demo__card ul-demo__card--sm">
              {delay} / {stagger}
            </div>
          </Unlock>
        </UnlockTile>
      ))}
    </div>
  );
}
