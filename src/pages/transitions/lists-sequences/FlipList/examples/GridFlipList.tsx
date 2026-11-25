import { useMemo, useState } from "react";
import { FlipList } from "@gem-org/gemsitions/flip-list";
import {
  FLIP_LIST_GRID_TILES,
  applyFlipFilter,
  listNames,
  namesBeforeM,
  namesFromM,
  shuffleLabels,
  type FlipListFilterId,
} from "./demo.ts";
import { FlipControls } from "./FlipControls.tsx";
import "./flip-list-demo.css";

type GridFlipListProps = {
  shuffle: string;
  reverse: string;
  all: string;
  early: string;
  late: string;
  sibling: string;
};

export function GridFlipList({ shuffle, reverse, all, early, late, sibling }: GridFlipListProps) {
  const [order, setOrder] = useState<string[]>(() => [...FLIP_LIST_GRID_TILES]);
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
        earlyTitle={listNames(namesBeforeM(FLIP_LIST_GRID_TILES))}
        lateTitle={listNames(namesFromM(FLIP_LIST_GRID_TILES))}
        onShuffle={() => setOrder((value) => shuffleLabels(value))}
        onReverse={() => setOrder((value) => [...value].reverse())}
        onFilter={setFilter}
      />
      <FlipList className="flip-list-demo__grid" axis="both" duration={360}>
        {visible.map((label) => (
          <div key={label} className="flip-list-demo__tile">
            {label}
          </div>
        ))}
      </FlipList>
      <p className="flip-list-demo__sibling">{sibling}</p>
    </div>
  );
}
