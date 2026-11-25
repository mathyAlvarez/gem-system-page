import { Zoom, type ZoomProps } from "@gem-org/gemffects/zoom";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { ZoomImage, ZoomTile } from "./ZoomTile.tsx";
import "./zoom-demo.css";

const frameVariants = cva("", {
  variants: {
    shape: {
      sharp: "rounded-none",
      rounded: "rounded-[var(--gem-radius-lg)]",
      round: "rounded-full",
    },
  },
  defaultVariants: { shape: "rounded" },
});

type FrameZoomProps = ZoomProps & VariantProps<typeof frameVariants>;

export function FrameZoom({ shape, className, ...props }: FrameZoomProps) {
  return <Zoom intensity="lg" className={cn(frameVariants({ shape }), className)} {...props} />;
}

export function VariantZoom() {
  return (
    <div className="zoom-demo">
      {(["sharp", "rounded", "round"] as const).map((shape) => (
        <ZoomTile key={shape} label={`shape="${shape}"`}>
          <FrameZoom shape={shape}>
            <ZoomImage compact />
          </FrameZoom>
        </ZoomTile>
      ))}
    </div>
  );
}
