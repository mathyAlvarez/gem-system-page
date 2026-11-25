import { Ripple } from "@gem-org/gemffects/ripple";
import "./ripple-demo.css";

type AsChildRippleProps = {
  save: string;
  plain: string;
};

export function AsChildRipple({ save, plain }: AsChildRippleProps) {
  return (
    <div className="rl-demo">
      <Ripple asChild color="var(--gem-palette-primary-500)">
        <button type="button" className="rl-demo__target rl-demo__host">
          {save}
        </button>
      </Ripple>
      <button type="button" className="rl-demo__target rl-demo__host">
        {plain}
      </button>
    </div>
  );
}
