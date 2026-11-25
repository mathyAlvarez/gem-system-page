import { useMemo, useState } from "react";
import { FlipList } from "@gem-org/gemsitions/flip-list";
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

type TailwindFlipListProps = {
  shuffle: string;
  reverse: string;
  all: string;
  early: string;
  late: string;
};

export function TailwindFlipList({ shuffle, reverse, all, early, late }: TailwindFlipListProps) {
  const [order, setOrder] = useState<string[]>(() => [...FLIP_LIST_TILES]);
  const [filter, setFilter] = useState<FlipListFilterId>("all");
  const visible = useMemo(() => applyFlipFilter(order, filter), [order, filter]);

  return (
    <div className="flip-list-demo">
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
      <FlipList
        className="flex flex-col gap-2 [--gemst-flip-easing:var(--gemst-easing-emphasized)]"
        duration={360}
      >
        {visible.map((label) => (
          <div
            key={label}
            className="rounded-[var(--gem-radius-lg)] bg-[var(--gem-color-bg-subtle)] px-4 py-3 text-sm font-semibold text-[var(--gem-color-fg)] shadow-[var(--gem-shadow-sm)]"
          >
            {label}
          </div>
        ))}
      </FlipList>
    </div>
  );
}
