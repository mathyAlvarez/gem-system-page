import { Vortex, type VortexProps } from "@gem-org/gemffects/vortex";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { VortexTile } from "./VortexTile.tsx";
import "./vortex-demo.css";

const portalVariants = cva("rounded-[var(--gem-radius-md)]", {
  variants: {
    element: {
      arcane: "[--gemfx-vortex-color:var(--gem-palette-secondary-400)]",
      ember: "[--gemfx-vortex-color:var(--gem-palette-warning-400)]",
      frost: "[--gemfx-vortex-color:var(--gem-palette-primary-200)]",
    },
  },
  defaultVariants: { element: "arcane" },
});

type PortalVortexProps = Omit<VortexProps, "color"> & VariantProps<typeof portalVariants>;

export function PortalVortex({ element, className, ...props }: PortalVortexProps) {
  return (
    <Vortex
      variant="ring"
      trigger="always"
      intensity="lg"
      className={cn(portalVariants({ element }), className)}
      {...props}
    />
  );
}

export function VariantVortex() {
  return (
    <div className="vortex-demo">
      {(["arcane", "ember", "frost"] as const).map((element) => (
        <VortexTile key={element} label={`element="${element}"`}>
          <PortalVortex element={element}>
            <div className="vortex-demo__tile">{element}</div>
          </PortalVortex>
        </VortexTile>
      ))}
    </div>
  );
}
