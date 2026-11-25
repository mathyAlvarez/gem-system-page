import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { FlipList } from "@gem-org/gemsitions/flip-list";
import { FLIP_LIST_TILES, shuffleLabels } from "./demo.ts";
import "./flip-list-demo.css";

type StaggerKeyFlipListProps = {
  shuffle: string;
  restagger: string;
};

export function StaggerKeyFlipList({ shuffle, restagger }: StaggerKeyFlipListProps) {
  const [order, setOrder] = useState<string[]>(() => [...FLIP_LIST_TILES]);
  const [staggerKey, setStaggerKey] = useState(0);

  return (
    <div className="flip-list-demo">
      <div className="flip-list-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setOrder((value) => shuffleLabels(value))}
        >
          {shuffle}
        </Button>
        <Button size="sm" variant="secondary" onClick={() => setStaggerKey((value) => value + 1)}>
          {restagger}
        </Button>
      </div>
      <FlipList
        className="flip-list-demo__list"
        staggerKey={staggerKey}
        staggerDelay={55}
        duration={280}
      >
        {order.map((label) => (
          <div key={label} className="flip-list-demo__tile">
            {label}
          </div>
        ))}
      </FlipList>
    </div>
  );
}
