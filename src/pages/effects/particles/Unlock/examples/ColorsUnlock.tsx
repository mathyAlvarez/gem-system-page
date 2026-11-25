import { Unlock } from "@gem-org/gemffects/unlock";
import { UnlockTile } from "./UnlockTile.tsx";
import "./unlock-demo.css";

const COLORS = [
  { label: "default", color: undefined },
  { label: "…tertiary-700", color: "var(--gem-palette-tertiary-700)" },
  { label: "…secondary-600", color: "var(--gem-palette-secondary-600)" },
  { label: "…neutral-400", color: "var(--gem-palette-neutral-400)" },
];

export function ColorsUnlock() {
  return (
    <div className="ul-demo">
      {COLORS.map(({ label, color }) => (
        <UnlockTile key={label} label={color ? `color="${label}"` : label}>
          <Unlock color={color} className="ul-demo__host">
            <div className="ul-demo__card ul-demo__card--sm">{label}</div>
          </Unlock>
        </UnlockTile>
      ))}
    </div>
  );
}
