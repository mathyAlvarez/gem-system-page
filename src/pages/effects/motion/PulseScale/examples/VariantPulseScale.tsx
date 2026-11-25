import { PulseScale, type PulseScaleProps } from "@gem-org/gemffects/pulse-scale";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { PulseTile } from "./PulseTile.tsx";
import "./pulse-scale-demo.css";

const alertVariants = cva("rounded-full", {
  variants: {
    tone: {
      info: "[--gemfx-pulse-scale-ring-color:var(--gem-palette-primary-400)]",
      success: "[--gemfx-pulse-scale-ring-color:var(--gem-palette-success-400)]",
      error: "[--gemfx-pulse-scale-ring-color:var(--gem-palette-error-400)]",
    },
  },
  defaultVariants: { tone: "info" },
});

type AlertPulseScaleProps = PulseScaleProps & VariantProps<typeof alertVariants>;

export function AlertPulseScale({ tone, className, ...props }: AlertPulseScaleProps) {
  return (
    <PulseScale
      variant="ping"
      duration={1600}
      className={cn(alertVariants({ tone }), className)}
      {...props}
    />
  );
}

export function VariantPulseScale() {
  return (
    <div className="pulse-demo">
      <PulseTile label='tone="success"'>
        <AlertPulseScale tone="success">
          <span className="pulse-demo__cta">success</span>
        </AlertPulseScale>
      </PulseTile>
      <PulseTile label='tone="error"'>
        <AlertPulseScale tone="error">
          <span className="pulse-demo__cta">error</span>
        </AlertPulseScale>
      </PulseTile>
    </div>
  );
}
