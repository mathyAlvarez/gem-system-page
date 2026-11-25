import { Rip } from "@gem-org/gemffects/rip";
import "./rip-demo.css";
import "./rip-overrides.css";

type StyledRipProps = {
  label: string;
};

export function StyledRip({ label }: StyledRipProps) {
  return (
    <div className="rp-demo__stage">
      <Rip variant="tear" particle="star" width={22} className="rp-frost">
        <div className="rp-demo__target">{label}</div>
      </Rip>
    </div>
  );
}
