import { Button } from "@gem-org/gem-system";
import { ParticleBurst } from "@gem-org/gemffects/particle-burst";
import { BurstTile } from "./BurstTile.tsx";
import "./particle-burst-demo.css";

type HoldParticleBurstProps = {
  label: string;
};

export function HoldParticleBurst({ label }: HoldParticleBurstProps) {
  return (
    <div className="pb-demo">
      {[80, 150, 300].map((interval) => (
        <BurstTile key={interval} label={`interval={${interval}}`}>
          <ParticleBurst asChild trigger="hold" variant="spark" interval={interval}>
            <Button variant="neutral">{label}</Button>
          </ParticleBurst>
        </BurstTile>
      ))}
    </div>
  );
}
