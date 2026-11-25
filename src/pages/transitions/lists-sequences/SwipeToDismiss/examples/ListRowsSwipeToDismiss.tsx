import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { SwipeToDismiss } from "@gem-org/gemsitions/swipe-to-dismiss";
import { SWIPE_LIST_ITEMS } from "./demo.ts";
import "./swipe-to-dismiss-demo.css";

type ListRowsSwipeToDismissProps = {
  restoreAll: string;
  sibling: string;
};

export function ListRowsSwipeToDismiss({ restoreAll, sibling }: ListRowsSwipeToDismissProps) {
  const [hidden, setHidden] = useState<ReadonlySet<string>>(() => new Set());

  return (
    <div className="swipe-to-dismiss-demo">
      <div className="swipe-to-dismiss-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          disabled={hidden.size === 0}
          onClick={() => setHidden(new Set())}
        >
          {restoreAll}
        </Button>
      </div>
      <div className="swipe-to-dismiss-demo__list">
        {SWIPE_LIST_ITEMS.map((label) => (
          <SwipeToDismiss
            key={label}
            isIn={!hidden.has(label)}
            onDismiss={() => setHidden((current) => new Set(current).add(label))}
          >
            <div className="swipe-to-dismiss-demo__panel">{label}</div>
          </SwipeToDismiss>
        ))}
      </div>
      <p className="swipe-to-dismiss-demo__sibling">{sibling}</p>
    </div>
  );
}
