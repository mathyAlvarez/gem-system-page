import type { ReactNode } from "react";
import { Unlock, type UnlockProps } from "@gem-org/gemffects/unlock";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { UnlockTile } from "./UnlockTile.tsx";
import "./unlock-demo.css";

const prizeVariants = cva("ul-demo__card ul-demo__card--sm", {
  variants: {
    rarity: {
      common:
        "bg-[linear-gradient(145deg,var(--gem-palette-neutral-300),var(--gem-palette-neutral-600))]",
      rare: "bg-[linear-gradient(145deg,var(--gem-palette-secondary-400),var(--gem-palette-secondary-800))]",
      legendary:
        "bg-[linear-gradient(145deg,var(--gem-palette-tertiary-300),var(--gem-palette-tertiary-700))]",
    },
  },
  defaultVariants: { rarity: "common" },
});

const prizeDoors = {
  common: { direction: "up", color: "var(--gem-palette-neutral-800)" },
  rare: { direction: "horizontal", color: "var(--gem-palette-secondary-900)", gap: 2 },
  legendary: {
    direction: "vertical",
    color: "var(--gem-palette-tertiary-900)",
    gap: 4,
    duration: 900,
  },
} as const satisfies Record<string, Partial<UnlockProps>>;

type PrizeUnlockProps = Omit<UnlockProps, "direction" | "children"> &
  VariantProps<typeof prizeVariants> & { children: ReactNode };

/** Each rarity picks the doors and paints the prize underneath. */
export function PrizeUnlock({ rarity, className, children, ...props }: PrizeUnlockProps) {
  return (
    <Unlock {...prizeDoors[rarity ?? "common"]} className="ul-demo__host" {...props}>
      <div className={cn(prizeVariants({ rarity }), className)}>{children}</div>
    </Unlock>
  );
}

export function VariantUnlock() {
  return (
    <div className="ul-demo">
      {(["common", "rare", "legendary"] as const).map((rarity) => (
        <UnlockTile key={rarity} label={`rarity="${rarity}"`}>
          <PrizeUnlock rarity={rarity}>{rarity}</PrizeUnlock>
        </UnlockTile>
      ))}
    </div>
  );
}
