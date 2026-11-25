import { Flicker, type FlickerProps } from "@gem-org/gemffects/flicker";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { FlickerTile } from "./FlickerTile.tsx";
import "./flicker-demo.css";

const signVariants = cva("rounded-[var(--gem-radius-md)]", {
  variants: {
    tone: {
      pink: "[--gemfx-flicker-color:var(--gem-palette-secondary-400)]",
      amber: "[--gemfx-flicker-color:var(--gem-palette-warning-400)]",
      ice: "[--gemfx-flicker-color:var(--gem-palette-primary-200)]",
    },
  },
  defaultVariants: { tone: "pink" },
});

type NeonSignProps = Omit<FlickerProps, "color"> & VariantProps<typeof signVariants>;

export function NeonSign({ tone, className, ...props }: NeonSignProps) {
  return <Flicker className={cn(signVariants({ tone }), className)} {...props} />;
}

export function VariantFlicker() {
  return (
    <div className="flicker-demo">
      {(["pink", "amber", "ice"] as const).map((tone) => (
        <FlickerTile key={tone} label={`tone="${tone}"`}>
          <NeonSign tone={tone}>
            <span className="flicker-demo__target">{tone}</span>
          </NeonSign>
        </FlickerTile>
      ))}
    </div>
  );
}
