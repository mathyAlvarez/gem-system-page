import { GradientMesh } from "@gem-org/gemffects/gradient-mesh";
import { MeshTile } from "./MeshTile.tsx";
import "./gradient-mesh-demo.css";

type TailwindGradientMeshProps = {
  label: string;
};

export function TailwindGradientMesh({ label }: TailwindGradientMeshProps) {
  return (
    <MeshTile>
      <GradientMesh className="rounded-full [--gemfx-gradient-mesh-base:var(--gem-palette-neutral-50)] [--gemfx-gradient-mesh-from:var(--gem-palette-primary-200)] [--gemfx-gradient-mesh-via:var(--gem-palette-secondary-200)] [--gemfx-gradient-mesh-to:var(--gem-palette-tertiary-200)] [--gemfx-gradient-mesh-blur:24px]">
        <span className="px-[var(--gem-space-6)] py-[var(--gem-space-3)] font-bold text-[color:var(--gem-palette-neutral-950)]">
          {label}
        </span>
      </GradientMesh>
    </MeshTile>
  );
}
