import { useMemo, useState } from "react";
import { FlipList } from "@gem-org/gemsitions/flip-list";
import {
  FLIP_LIST_LONG_TILES,
  applyFlipFilter,
  listNames,
  namesBeforeM,
  namesFromM,
  shuffleLabels,
  type FlipListFilterId,
} from "./demo.ts";
import { FlipControls } from "./FlipControls.tsx";
import "./flip-list-demo.css";

type MaintainScrollFlipListProps = {
  shuffle: string;
  all: string;
  early: string;
  late: string;
};

export function MaintainScrollFlipList({ shuffle, all, early, late }: MaintainScrollFlipListProps) {
  const [order, setOrder] = useState<string[]>(() => [...FLIP_LIST_LONG_TILES]);
  const [filter, setFilter] = useState<FlipListFilterId>("all");
  const visible = useMemo(() => applyFlipFilter(order, filter), [order, filter]);

  return (
    <div className="flip-list-demo">
      <FlipControls
        shuffle={shuffle}
        all={all}
        early={early}
        late={late}
        filter={filter}
        earlyTitle={listNames(namesBeforeM(FLIP_LIST_LONG_TILES))}
        lateTitle={listNames(namesFromM(FLIP_LIST_LONG_TILES))}
        onShuffle={() => setOrder((value) => shuffleLabels(value))}
        onFilter={setFilter}
      />
      <div className="flip-list-demo__scroll">
        <FlipList className="flip-list-demo__list" maintainScroll axis="y" duration={320}>
          {visible.map((label) => (
            <div key={label} className="flip-list-demo__tile">
              {label}
            </div>
          ))}
        </FlipList>
      </div>
    </div>
  );
}
