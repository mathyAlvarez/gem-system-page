import { Spotlight, type SpotlightProps } from "@gem-org/gemffects/spotlight";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { SpotlightTile } from "./SpotlightTile.tsx";
import "./spotlight-demo.css";

const beamVariants = cva("rounded-[var(--gem-radius-md)]", {
  variants: {
    tone: {
      mint: "[--gemfx-spotlight-color:var(--gem-palette-primary-300)]",
      magenta: "[--gemfx-spotlight-color:var(--gem-palette-secondary-400)]",
      amber: "[--gemfx-spotlight-color:var(--gem-palette-tertiary-400)]",
    },
  },
  defaultVariants: { tone: "mint" },
});

type BeamProps = Omit<SpotlightProps, "variant"> & VariantProps<typeof beamVariants>;

export function Beam({ tone, className, ...props }: BeamProps) {
  return <Spotlight variant="glow" className={cn(beamVariants({ tone }), className)} {...props} />;
}

export function VariantSpotlight() {
  return (
    <div className="spotlight-demo">
      <SpotlightTile label='tone="magenta"'>
        <Beam tone="magenta" trigger="always">
          <span className="spotlight-demo__target">magenta</span>
        </Beam>
      </SpotlightTile>
      <SpotlightTile label='tone="amber"'>
        <Beam tone="amber" trigger="always">
          <span className="spotlight-demo__target">amber</span>
        </Beam>
      </SpotlightTile>
    </div>
  );
}
