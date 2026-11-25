import { Rip } from "@gem-org/gemffects/rip";
import "./rip-demo.css";

type BaseRipProps = {
  kicker: string;
  title: string;
};

export function BaseRip({ kicker, title }: BaseRipProps) {
  return (
    <div className="rp-demo__stage">
      <Rip tabIndex={0} className="rp-demo__host">
        <div className="rp-demo__target">
          <p className="rp-demo__kicker">{kicker}</p>
          <p className="rp-demo__title">{title}</p>
        </div>
      </Rip>
    </div>
  );
}
