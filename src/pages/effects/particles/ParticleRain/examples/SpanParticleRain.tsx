import { ParticleRain } from "@gem-org/gemffects/particle-rain";
import { RainTile } from "./RainTile.tsx";
import "./particle-rain-demo.css";

export function SpanParticleRain() {
  return (
    <div className="pr-demo">
      {[700, 1400, 2400].map((span) => (
        <RainTile key={span} label={`span={${span}}`}>
          <ParticleRain trigger="click" span={span} className="pr-demo__host pr-demo__host--sm">
            <p className="pr-demo__copy">{span} ms</p>
          </ParticleRain>
        </RainTile>
      ))}
    </div>
  );
}
