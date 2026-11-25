import { Button } from "@gem-org/gem-system";
import { ParticleBurst } from "@gem-org/gemffects/particle-burst";
import "./particle-burst-demo.css";

type AsChildParticleBurstProps = {
  label: string;
};

export function AsChildParticleBurst({ label }: AsChildParticleBurstProps) {
  return (
    <div className="pb-demo__stage">
      <ParticleBurst asChild variant="star">
        <Button variant="neutral" className="pb-demo__button">
          {label}
        </Button>
      </ParticleBurst>
    </div>
  );
}
