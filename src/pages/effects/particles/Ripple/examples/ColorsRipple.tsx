import { Ripple } from "@gem-org/gemffects/ripple";
import { RippleTile } from "./RippleTile.tsx";
import "./ripple-demo.css";

const COLORS = [
  { label: "default", color: undefined },
  { label: "…primary-500", color: "var(--gem-palette-primary-500)" },
  { label: "…tertiary-400", color: "var(--gem-palette-tertiary-400)" },
  { label: "…error-500", color: "var(--gem-palette-error-500)" },
];

export function ColorsRipple() {
  return (
    <div className="rl-demo">
      {COLORS.map(({ label, color }) => (
        <RippleTile key={label} label={color ? `color="${label}"` : label}>
          <Ripple color={color} intensity="lg" className="rl-demo__host">
            <span className="rl-demo__target">{label}</span>
          </Ripple>
        </RippleTile>
      ))}
    </div>
  );
}
