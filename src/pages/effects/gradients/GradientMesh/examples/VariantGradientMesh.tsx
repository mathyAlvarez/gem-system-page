import { GradientMesh, type GradientMeshProps } from "@gem-org/gemffects/gradient-mesh";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { MeshTile } from "./MeshTile.tsx";
import "./gradient-mesh-demo.css";

const moodVariants = cva("gm-demo__host gm-demo__host--sm", {
  variants: {
    mood: {
      calm: "[--gemfx-gradient-mesh-from:var(--gem-palette-primary-400)] [--gemfx-gradient-mesh-via:var(--gem-palette-info-500)] [--gemfx-gradient-mesh-to:var(--gem-palette-primary-700)]",
      energy:
        "[--gemfx-gradient-mesh-from:var(--gem-palette-tertiary-400)] [--gemfx-gradient-mesh-via:var(--gem-palette-secondary-400)] [--gemfx-gradient-mesh-to:var(--gem-palette-error-500)]",
      night:
        "[--gemfx-gradient-mesh-base:var(--gem-palette-neutral-950)] [--gemfx-gradient-mesh-from:var(--gem-palette-secondary-700)] [--gemfx-gradient-mesh-via:var(--gem-palette-info-500)] [--gemfx-gradient-mesh-to:var(--gem-palette-neutral-700)]",
    },
  },
  defaultVariants: { mood: "calm" },
});

type MoodMeshProps = Omit<GradientMeshProps, "variant"> & VariantProps<typeof moodVariants>;

/** Night drifts slower and with wider sweeps. */
export function MoodMesh({ mood, className, ...props }: MoodMeshProps) {
  return (
    <GradientMesh
      variant={mood === "night" ? "aurora" : "liquid"}
      duration={mood === "energy" ? 5000 : 12000}
      className={cn(moodVariants({ mood }), className)}
      {...props}
    />
  );
}

export function VariantGradientMesh() {
  return (
    <div className="gm-demo">
      {(["calm", "energy", "night"] as const).map((mood) => (
        <MeshTile key={mood} label={`mood="${mood}"`}>
          <MoodMesh mood={mood}>
            <p className="gm-demo__copy">{mood}</p>
          </MoodMesh>
        </MeshTile>
      ))}
    </div>
  );
}
