import { GradientMesh } from "@gem-org/gemffects/gradient-mesh";
import { MeshTile } from "./MeshTile.tsx";
import "./gradient-mesh-demo.css";

const PALETTES = [
  {
    label: "cool",
    from: "var(--gem-palette-primary-300)",
    via: "var(--gem-palette-info-500)",
    to: "var(--gem-palette-secondary-400)",
  },
  {
    label: "warm",
    from: "var(--gem-palette-tertiary-300)",
    via: "var(--gem-palette-error-400)",
    to: "var(--gem-palette-warning-300)",
  },
  {
    label: "mono",
    from: "var(--gem-palette-neutral-200)",
    via: "var(--gem-palette-neutral-500)",
    to: "var(--gem-palette-neutral-700)",
  },
];

export function ColorsGradientMesh() {
  return (
    <div className="gm-demo">
      {PALETTES.map((palette) => (
        <MeshTile key={palette.label} label={palette.label}>
          <GradientMesh
            from={palette.from}
            via={palette.via}
            to={palette.to}
            className="gm-demo__host gm-demo__host--sm"
          >
            <p className="gm-demo__copy">{palette.label}</p>
          </GradientMesh>
        </MeshTile>
      ))}
    </div>
  );
}
