import { Ripple } from "@gem-org/gemffects/ripple";
import "./ripple-demo.css";

type BaseRippleProps = {
  label: string;
};

export function BaseRipple({ label }: BaseRippleProps) {
  return (
    <Ripple className="rl-demo__host">
      <button type="button" className="rl-demo__target">
        {label}
      </button>
    </Ripple>
  );
}
