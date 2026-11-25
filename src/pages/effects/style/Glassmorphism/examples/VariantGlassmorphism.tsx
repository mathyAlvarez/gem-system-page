import { Glassmorphism, type GlassmorphismProps } from "@gem-org/gemffects/glassmorphism";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { GlassCopy, GlassScene } from "./GlassScene.tsx";
import "./glassmorphism-demo.css";

const panelVariants = cva("", {
  variants: {
    tone: {
      milk: "[--gemfx-glassmorphism-color:var(--gem-palette-neutral-0)]",
      mint: "[--gemfx-glassmorphism-color:var(--gem-palette-primary-200)]",
      amber: "[--gemfx-glassmorphism-color:var(--gem-palette-warning-200)]",
    },
    shape: {
      card: "rounded-[var(--gem-radius-lg)]",
      pill: "rounded-full",
    },
  },
  defaultVariants: { tone: "milk", shape: "card" },
});

type GlassPanelProps = Omit<GlassmorphismProps, "color"> & VariantProps<typeof panelVariants>;

export function GlassPanel({ tone, shape, className, ...props }: GlassPanelProps) {
  return <Glassmorphism className={cn(panelVariants({ tone, shape }), className)} {...props} />;
}

export function VariantGlassmorphism() {
  return (
    <div className="glass-demo">
      {(["milk", "mint", "amber"] as const).map((tone) => (
        <GlassScene key={tone} label={`tone="${tone}"`} compact>
          <GlassPanel tone={tone} shape={tone === "amber" ? "pill" : "card"}>
            <GlassCopy title={tone} />
          </GlassPanel>
        </GlassScene>
      ))}
    </div>
  );
}
