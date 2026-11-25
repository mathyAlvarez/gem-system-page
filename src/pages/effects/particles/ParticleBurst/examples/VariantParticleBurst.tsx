import { ParticleBurst, type ParticleBurstProps } from "@gem-org/gemffects/particle-burst";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { BurstTile } from "./BurstTile.tsx";
import "./particle-burst-demo.css";

const moodVariants = cva("pb-demo__target", {
  variants: {
    mood: {
      party: "border-[color:var(--gem-palette-primary-400)]",
      magic: "border-[color:var(--gem-palette-secondary-400)]",
      fire: "border-[color:var(--gem-palette-tertiary-400)]",
    },
  },
  defaultVariants: { mood: "party" },
});

const moodBurst = {
  party: { variant: "confetti" },
  magic: { variant: "star", intensity: "lg" },
  fire: {
    variant: "spark",
    colors: [
      "var(--gem-palette-tertiary-300)",
      "var(--gem-palette-error-400)",
      "var(--gem-palette-neutral-0)",
    ],
  },
} as const satisfies Record<string, Partial<ParticleBurstProps>>;

type MoodBurstProps = Omit<ParticleBurstProps, "variant"> &
  VariantProps<typeof moodVariants> & { label: string };

/** Each mood picks a particle look and colors the target's border to match. */
export function MoodBurst({ mood, label, className, ...props }: MoodBurstProps) {
  return (
    <ParticleBurst {...moodBurst[mood ?? "party"]} {...props}>
      <span className={cn(moodVariants({ mood }), className)}>{label}</span>
    </ParticleBurst>
  );
}

export function VariantParticleBurst() {
  return (
    <div className="pb-demo">
      {(["party", "magic", "fire"] as const).map((mood) => (
        <BurstTile key={mood} label={`mood="${mood}"`}>
          <MoodBurst mood={mood} label={mood} />
        </BurstTile>
      ))}
    </div>
  );
}
