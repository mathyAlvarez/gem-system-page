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

type AxisYFlipListProps = {
  shuffle: string;
  reverse: string;
  all: string;
  early: string;
  late: string;
  sibling: string;
};

export function AxisYFlipList({ shuffle, reverse, all, early, late, sibling }: AxisYFlipListProps) {
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
      <FlipList className="flip-list-demo__list" axis="y" duration={320}>
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
