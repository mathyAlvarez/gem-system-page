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

type AsChildFlipListProps = {
  shuffle: string;
  all: string;
  early: string;
  late: string;
  sibling: string;
};

export function AsChildFlipList({ shuffle, all, early, late, sibling }: AsChildFlipListProps) {
  const [order, setOrder] = useState<string[]>(() => [...FLIP_LIST_TILES]);
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
        earlyTitle={listNames(namesBeforeM(FLIP_LIST_TILES))}
        lateTitle={listNames(namesFromM(FLIP_LIST_TILES))}
        onShuffle={() => setOrder((value) => shuffleLabels(value))}
        onFilter={setFilter}
      />
      <FlipList asChild axis="y" duration={320}>
        <ul className="flip-list-demo__list">
          {visible.map((label) => (
            <li key={label} className="flip-list-demo__tile">
              {label}
            </li>
          ))}
        </ul>
      </FlipList>
      <p className="flip-list-demo__sibling">{sibling}</p>
    </div>
  );
}
