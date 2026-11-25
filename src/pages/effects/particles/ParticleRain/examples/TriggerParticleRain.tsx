import { ParticleRain } from "@gem-org/gemffects/particle-rain";
import { RainTile } from "./RainTile.tsx";
import "./particle-rain-demo.css";

type TriggerParticleRainProps = {
  hoverLabel: string;
  clickLabel: string;
  holdLabel: string;
};

export function TriggerParticleRain({
  hoverLabel,
  clickLabel,
  holdLabel,
}: TriggerParticleRainProps) {
  const triggers = [
    { trigger: "hover", label: hoverLabel },
    { trigger: "click", label: clickLabel },
    { trigger: "hold", label: holdLabel },
  ] as const;

  return (
    <div className="pr-demo">
      {triggers.map(({ trigger, label }) => (
        <RainTile key={trigger} label={`trigger="${trigger}"`}>
          <ParticleRain trigger={trigger} tabIndex={0} className="pr-demo__host pr-demo__host--sm">
            <p className="pr-demo__copy">{label}</p>
          </ParticleRain>
        </RainTile>
      ))}
    </div>
  );
}
