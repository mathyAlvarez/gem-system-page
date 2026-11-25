import { GradientGlossy, type GradientGlossyProps } from "@gem-org/gemffects/gradient-glossy";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { GlossyTile } from "./GlossyTile.tsx";
import "./gradient-glossy-demo.css";

const toneVariants = cva("rounded-[var(--gem-radius-sm)] font-semibold", {
  variants: {
    tone: {
      info: "[--gemfx-gradient-glossy-color:var(--gem-palette-info-500)]",
      success: "[--gemfx-gradient-glossy-color:var(--gem-palette-success-500)]",
      warning:
        "[--gemfx-gradient-glossy-color:var(--gem-palette-warning-500)] text-[color:var(--gem-palette-neutral-950)]",
      error: "[--gemfx-gradient-glossy-color:var(--gem-palette-error-500)]",
    },
  },
  defaultVariants: { tone: "info" },
});

type ToneGlossyProps = GradientGlossyProps & VariantProps<typeof toneVariants>;

export function ToneGlossy({ tone, className, ...props }: ToneGlossyProps) {
  return (
    <GradientGlossy variant="soft" className={cn(toneVariants({ tone }), className)} {...props} />
  );
}

export function VariantGradientGlossy() {
  return (
    <div className="gg-demo">
      {(["info", "success", "warning", "error"] as const).map((tone) => (
        <GlossyTile key={tone} label={`tone="${tone}"`}>
          <ToneGlossy tone={tone}>
            <span className="gg-demo__target">{tone}</span>
          </ToneGlossy>
        </GlossyTile>
      ))}
    </div>
  );
}
