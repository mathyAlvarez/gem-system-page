import { BlurUnveil, type BlurUnveilProps } from "@gem-org/gemffects/blur-unveil";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { UnveilImage, UnveilTile } from "./UnveilTile.tsx";
import "./blur-unveil-demo.css";

const revealVariants = cva("rounded-[var(--gem-radius-md)]", {
  variants: {
    feel: {
      linear: "[--gemfx-easing-emphasized:linear]",
      gentle: "[--gemfx-easing-emphasized:cubic-bezier(0.4,0,0.2,1)]",
      snappy: "[--gemfx-easing-emphasized:cubic-bezier(0.05,0.7,0.1,1)]",
    },
  },
  defaultVariants: { feel: "gentle" },
});

type RevealBlurUnveilProps = BlurUnveilProps & VariantProps<typeof revealVariants>;

export function RevealBlurUnveil({ feel, className, ...props }: RevealBlurUnveilProps) {
  return (
    <BlurUnveil
      trigger="click"
      duration={900}
      className={cn(revealVariants({ feel }), className)}
      {...props}
    />
  );
}

export function VariantBlurUnveil() {
  return (
    <div className="unveil-demo">
      {(["linear", "gentle", "snappy"] as const).map((feel) => (
        <UnveilTile key={feel} label={`feel="${feel}"`}>
          <RevealBlurUnveil feel={feel}>
            <UnveilImage compact />
          </RevealBlurUnveil>
        </UnveilTile>
      ))}
    </div>
  );
}
