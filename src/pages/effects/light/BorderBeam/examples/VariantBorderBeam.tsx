import { BorderBeam, type BorderBeamProps } from "@gem-org/gemffects/border-beam";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { BeamTile } from "./BeamTile.tsx";
import "./border-beam-demo.css";

const statusVariants = cva("rounded-[var(--gem-radius-md)]", {
  variants: {
    status: {
      info: "",
      success:
        "[--gemfx-border-beam-color:var(--gem-palette-success-400)] [--gemfx-border-beam-color-alt:var(--gem-palette-success-200)]",
      warning:
        "[--gemfx-border-beam-color:var(--gem-palette-warning-400)] [--gemfx-border-beam-color-alt:var(--gem-palette-warning-200)]",
    },
  },
  defaultVariants: { status: "info" },
});

type StatusBeamProps = BorderBeamProps & VariantProps<typeof statusVariants>;

export function StatusBeam({ status, className, ...props }: StatusBeamProps) {
  return <BorderBeam className={cn(statusVariants({ status }), className)} {...props} />;
}

export function VariantBorderBeam() {
  return (
    <div className="border-beam-demo">
      <BeamTile label='status="success"'>
        <StatusBeam status="success">
          <span className="border-beam-demo__target">success</span>
        </StatusBeam>
      </BeamTile>
      <BeamTile label='status="warning"'>
        <StatusBeam status="warning">
          <span className="border-beam-demo__target">warning</span>
        </StatusBeam>
      </BeamTile>
    </div>
  );
}
