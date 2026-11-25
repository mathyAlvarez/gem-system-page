import { HoloFoil, type HoloFoilProps } from "@gem-org/gemffects/holo-foil";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { FoilCard, FoilTile } from "./FoilTile.tsx";
import "./holofoil-demo.css";

const rarityVariants = cva("rounded-[var(--gem-radius-lg)]", {
  variants: {
    rarity: {
      rare: "[--gemfx-holofoil-c1:#9ecbff] [--gemfx-holofoil-c2:#5ad6ff] [--gemfx-holofoil-c3:#3b82f6] [--gemfx-holofoil-c4:#a5f3fc] [--gemfx-holofoil-c5:#e0f2fe]",
      epic: "[--gemfx-holofoil-c1:#f0abfc] [--gemfx-holofoil-c2:#c084fc] [--gemfx-holofoil-c3:#8a5cff] [--gemfx-holofoil-c4:#f472b6] [--gemfx-holofoil-c5:#fbcfe8]",
      legendary:
        "[--gemfx-holofoil-c1:#fde68a] [--gemfx-holofoil-c2:#fbbf24] [--gemfx-holofoil-c3:#f97316] [--gemfx-holofoil-c4:#facc15] [--gemfx-holofoil-c5:#fff7ed]",
    },
  },
  defaultVariants: { rarity: "rare" },
});

type RarityFoilProps = Omit<HoloFoilProps, "variant"> & VariantProps<typeof rarityVariants>;

/** Only `rainbow` reads the `--gemfx-holofoil-c*` palette. */
export function RarityFoil({ rarity, className, ...props }: RarityFoilProps) {
  return (
    <HoloFoil variant="rainbow" className={cn(rarityVariants({ rarity }), className)} {...props} />
  );
}

export function VariantHoloFoil() {
  return (
    <div className="foil-demo">
      {(["rare", "epic", "legendary"] as const).map((rarity) => (
        <FoilTile key={rarity} label={`rarity="${rarity}"`}>
          <RarityFoil rarity={rarity} trigger="always">
            <FoilCard title={rarity} compact />
          </RarityFoil>
        </FoilTile>
      ))}
    </div>
  );
}
