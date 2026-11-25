import { Glow, type GlowProps } from "@gem-org/gemffects/glow";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { GlowTile } from "./GlowTile.tsx";
import "./glow-demo.css";

const neonVariants = cva("rounded-[var(--gem-radius-md)]", {
  variants: {
    tone: {
      primary: "",
      secondary: "[--gemfx-glow-color:var(--gem-palette-secondary-400)]",
      tertiary: "[--gemfx-glow-color:var(--gem-palette-tertiary-400)]",
    },
    softness: {
      sharp: "[--gemfx-glow-blur:0.6rem]",
      soft: "",
      haze: "[--gemfx-glow-blur:2.5rem]",
    },
  },
  defaultVariants: { tone: "primary", softness: "soft" },
});

type NeonGlowProps = GlowProps & VariantProps<typeof neonVariants>;

export function NeonGlow({ tone, softness, className, ...props }: NeonGlowProps) {
  return <Glow className={cn(neonVariants({ tone, softness }), className)} {...props} />;
}

export function VariantGlow() {
  return (
    <div className="glow-demo">
      <GlowTile label='tone="secondary" softness="sharp"'>
        <NeonGlow tone="secondary" softness="sharp">
          <span className="glow-demo__target">sharp</span>
        </NeonGlow>
      </GlowTile>
      <GlowTile label='tone="tertiary" softness="haze"'>
        <NeonGlow tone="tertiary" softness="haze">
          <span className="glow-demo__target">haze</span>
        </NeonGlow>
      </GlowTile>
    </div>
  );
}
