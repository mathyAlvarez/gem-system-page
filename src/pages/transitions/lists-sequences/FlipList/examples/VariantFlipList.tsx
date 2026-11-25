import { useMemo, useState } from "react";
import { FlipList, type FlipListProps } from "@gem-org/gemsitions/flip-list";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import {
  FLIP_LIST_TILES,
  applyFlipFilter,
  listNames,
  namesBeforeM,
  namesFromM,
  shuffleLabels,
  type FlipListFilterId,
} from "./demo.ts";
import { FlipControls } from "./FlipControls.tsx";
import "./flip-list-demo.css";

const listVariants = cva("flip-list-demo__list", {
  variants: {
    tone: {
      neutral: "",
      accent:
        "rounded-[var(--gem-radius-lg)] p-2 bg-[color-mix(in_srgb,var(--gem-palette-primary-500)_10%,var(--gem-color-bg))]",
    },
  },
  defaultVariants: { tone: "neutral" },
});

type SoftFlipProps = FlipListProps & VariantProps<typeof listVariants>;

export function SoftFlip({ tone, className, ...props }: SoftFlipProps) {
  return <FlipList duration={320} className={cn(listVariants({ tone }), className)} {...props} />;
}

type VariantFlipListProps = {
  shuffle: string;
  reverse: string;
  all: string;
  early: string;
  late: string;
};

export function VariantFlipList({ shuffle, reverse, all, early, late }: VariantFlipListProps) {
  const [order, setOrder] = useState<string[]>(() => [...FLIP_LIST_TILES]);
  const [filter, setFilter] = useState<FlipListFilterId>("all");
  const visible = useMemo(() => applyFlipFilter(order, filter), [order, filter]);

  return (
    <div className="flip-list-demo flip-list-demo--wide">
      <FlipControls
        shuffle={shuffle}
        reverse={reverse}
        all={all}
        early={early}
        late={late}
        filter={filter}
        earlyTitle={listNames(namesBeforeM(FLIP_LIST_TILES))}
        lateTitle={listNames(namesFromM(FLIP_LIST_TILES))}
        onShuffle={() => setOrder((value) => shuffleLabels(value))}
        onReverse={() => setOrder((value) => [...value].reverse())}
        onFilter={setFilter}
      />
      <div className="flip-list-demo__compare">
        {(
          [
            { tone: "neutral" as const, label: 'tone="neutral"' },
            { tone: "accent" as const, label: 'tone="accent"' },
          ] as const
        ).map((item) => (
          <div key={item.tone}>
            <p className="flip-list-demo__compare-label">{item.label}</p>
            <SoftFlip tone={item.tone}>
              {visible.map((label) => (
                <div key={`${item.tone}-${label}`} className="flip-list-demo__tile">
                  {label}
                </div>
              ))}
            </SoftFlip>
          </div>
        ))}
      </div>
    </div>
  );
}
