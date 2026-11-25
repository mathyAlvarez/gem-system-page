import { Meteors, type MeteorsProps } from "@gem-org/gemffects/meteors";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { MeteorTile } from "./MeteorTile.tsx";
import "./meteors-demo.css";

const skyVariants = cva("mt-demo__host mt-demo__host--sm", {
  variants: {
    sky: {
      dusk: "bg-[linear-gradient(180deg,var(--gem-palette-tertiary-900),var(--gem-palette-secondary-900))] [--gemfx-meteors-color:var(--gem-palette-tertiary-200)]",
      midnight:
        "bg-[linear-gradient(180deg,var(--gem-palette-neutral-900),var(--gem-palette-neutral-950))] [--gemfx-meteors-color:var(--gem-palette-neutral-50)]",
      aurora:
        "bg-[linear-gradient(180deg,var(--gem-palette-primary-900),var(--gem-palette-neutral-950))] [--gemfx-meteors-color:var(--gem-palette-primary-200)]",
    },
  },
  defaultVariants: { sky: "midnight" },
});

type SkyMeteorsProps = Omit<MeteorsProps, "variant"> & VariantProps<typeof skyVariants>;

/** Dusk gets warm embers; the other skies use thin trails. */
export function SkyMeteors({ sky, className, ...props }: SkyMeteorsProps) {
  return (
    <Meteors
      variant={sky === "dusk" ? "ember" : "trail"}
      intensity="lg"
      className={cn(skyVariants({ sky }), className)}
      {...props}
    />
  );
}

export function VariantMeteors() {
  return (
    <div className="mt-demo">
      {(["dusk", "midnight", "aurora"] as const).map((sky) => (
        <MeteorTile key={sky} label={`sky="${sky}"`}>
          <SkyMeteors sky={sky}>
            <p className="mt-demo__copy">{sky}</p>
          </SkyMeteors>
        </MeteorTile>
      ))}
    </div>
  );
}
