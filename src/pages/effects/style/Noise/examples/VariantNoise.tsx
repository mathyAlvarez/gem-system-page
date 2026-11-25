import { Noise, type NoiseProps } from "@gem-org/gemffects/noise";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { NoiseTile } from "./NoiseTile.tsx";
import "./noise-demo.css";

const posterVariants = cva(
  "flex h-[9rem] w-[11rem] items-end p-[var(--gem-space-4)] font-bold text-[var(--gem-palette-neutral-50)]",
  {
    variants: {
      tone: {
        primary:
          "bg-[linear-gradient(160deg,var(--gem-palette-primary-900),var(--gem-palette-primary-500))]",
        secondary:
          "bg-[linear-gradient(160deg,var(--gem-palette-secondary-900),var(--gem-palette-secondary-500))]",
        tertiary:
          "bg-[linear-gradient(160deg,var(--gem-palette-tertiary-900),var(--gem-palette-tertiary-500))]",
      },
    },
    defaultVariants: { tone: "primary" },
  },
);

type GrainPosterProps = Omit<NoiseProps, "children"> &
  VariantProps<typeof posterVariants> & {
    title: string;
  };

export function GrainPoster({ tone, title, className, ...props }: GrainPosterProps) {
  return (
    <Noise
      variant="film"
      intensity="lg"
      className={cn("rounded-[var(--gem-radius-md)]", className)}
      {...props}
    >
      <div className={posterVariants({ tone })}>{title}</div>
    </Noise>
  );
}

export function VariantNoise() {
  return (
    <div className="noise-demo">
      {(["primary", "secondary", "tertiary"] as const).map((tone) => (
        <NoiseTile key={tone} label={`tone="${tone}"`}>
          <GrainPoster tone={tone} title={tone} />
        </NoiseTile>
      ))}
    </div>
  );
}
