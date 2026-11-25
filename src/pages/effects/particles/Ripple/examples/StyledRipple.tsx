import { Ripple } from "@gem-org/gemffects/ripple";
import "./ripple-demo.css";
import "./ripple-overrides.css";

type StyledRippleProps = {
  label: string;
};

export function StyledRipple({ label }: StyledRippleProps) {
  return (
    <Ripple duration={900} className="rl-demo__host rl-splash">
      <span className="rl-demo__tile rl-demo__tile--label">{label}</span>
    </Ripple>
  );
}
