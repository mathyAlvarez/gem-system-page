import { Button } from "@gem-org/gem-system";
import { ParticleBurst } from "@gem-org/gemffects/particle-burst";
import "./particle-burst-demo.css";

type BaseParticleBurstProps = {
  label: string;
};

export function BaseParticleBurst({ label }: BaseParticleBurstProps) {
  return (
    <div className="pb-demo__stage">
      <ParticleBurst>
        <Button variant="primary" className="pb-demo__button">
          {label}
        </Button>
      </ParticleBurst>
    </div>
  );
}
