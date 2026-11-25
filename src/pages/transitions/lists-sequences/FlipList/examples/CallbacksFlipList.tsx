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

type CallbacksFlipListProps = {
  shuffle: string;
  reverse: string;
  all: string;
  early: string;
  late: string;
  empty: string;
};

export function CallbacksFlipList({
  shuffle,
  reverse,
  all,
  early,
  late,
  empty,
}: CallbacksFlipListProps) {
  const [order, setOrder] = useState<string[]>(() => [...FLIP_LIST_TILES]);
  const [filter, setFilter] = useState<FlipListFilterId>("all");
  const [log, setLog] = useState<string[]>([]);
  const visible = useMemo(() => applyFlipFilter(order, filter), [order, filter]);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 5));

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
        className="flip-list-demo__list"
        duration={320}
        onFlip={(event) => push(`onFlip · ${event.reason}`)}
        outFlip={(event) => push(`outFlip · ${event.reason}`)}
      >
        {visible.map((label) => (
          <div key={label} className="flip-list-demo__tile">
            {label}
          </div>
        ))}
      </FlipList>
      <ul className="flip-list-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </div>
  );
}
