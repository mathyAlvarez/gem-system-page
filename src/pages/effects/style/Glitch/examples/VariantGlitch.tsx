import { Glitch, type GlitchProps } from "@gem-org/gemffects/glitch";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { GlitchImage, GlitchTile } from "./GlitchTile.tsx";
import "./glitch-demo.css";

const screenVariants = cva("rounded-[var(--gem-radius-md)]", {
  variants: {
    channel: {
      synth:
        "[--gemfx-glitch-red:var(--gem-palette-secondary-400)] [--gemfx-glitch-cyan:var(--gem-palette-primary-400)]",
      ember:
        "[--gemfx-glitch-red:var(--gem-palette-error-400)] [--gemfx-glitch-cyan:var(--gem-palette-warning-400)]",
      mono: "[--gemfx-glitch-red:var(--gem-palette-neutral-50)] [--gemfx-glitch-cyan:var(--gem-palette-neutral-400)]",
    },
  },
  defaultVariants: { channel: "synth" },
});

type GlitchScreenProps = Omit<GlitchProps, "color" | "colorAlt"> &
  VariantProps<typeof screenVariants>;

export function GlitchScreen({ channel, className, ...props }: GlitchScreenProps) {
  return <Glitch className={cn(screenVariants({ channel }), className)} {...props} />;
}

export function VariantGlitch() {
  return (
    <div className="glitch-demo">
      {(["synth", "ember", "mono"] as const).map((channel) => (
        <GlitchTile key={channel} label={`channel="${channel}"`}>
          <GlitchScreen channel={channel} variant="slice" intensity="lg">
            <GlitchImage compact />
          </GlitchScreen>
        </GlitchTile>
      ))}
    </div>
  );
}
