import { ParticleRain, type ParticleRainProps } from "@gem-org/gemffects/particle-rain";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { RainTile } from "./RainTile.tsx";
import "./particle-rain-demo.css";

const seasonVariants = cva("pr-demo__host pr-demo__host--sm", {
  variants: {
    season: {
      spring:
        "bg-[linear-gradient(180deg,var(--gem-palette-secondary-900),var(--gem-palette-neutral-950))]",
      summer:
        "bg-[linear-gradient(180deg,var(--gem-palette-tertiary-900),var(--gem-palette-neutral-950))]",
      winter:
        "bg-[linear-gradient(180deg,var(--gem-palette-primary-900),var(--gem-palette-neutral-950))]",
    },
  },
  defaultVariants: { season: "winter" },
});

const seasonRain = {
  spring: {
    variant: "confetti",
    colors: ["var(--gem-palette-secondary-300)", "var(--gem-palette-secondary-200)"],
  },
  summer: {
    variant: "light",
    colors: ["var(--gem-palette-tertiary-300)", "var(--gem-palette-tertiary-200)"],
  },
  winter: { variant: "star", color: "var(--gem-palette-neutral-0)" },
} as const satisfies Record<string, Partial<ParticleRainProps>>;

type SeasonRainProps = Omit<ParticleRainProps, "variant"> & VariantProps<typeof seasonVariants>;

/** Each season picks a particle look and palette, and tints the host. */
export function SeasonRain({ season, className, ...props }: SeasonRainProps) {
  return (
    <ParticleRain
      {...seasonRain[season ?? "winter"]}
      className={cn(seasonVariants({ season }), className)}
      {...props}
    />
  );
}

export function VariantParticleRain() {
  return (
    <div className="pr-demo">
      {(["spring", "summer", "winter"] as const).map((season) => (
        <RainTile key={season} label={`season="${season}"`}>
          <SeasonRain season={season}>
            <p className="pr-demo__copy">{season}</p>
          </SeasonRain>
        </RainTile>
      ))}
    </div>
  );
}
