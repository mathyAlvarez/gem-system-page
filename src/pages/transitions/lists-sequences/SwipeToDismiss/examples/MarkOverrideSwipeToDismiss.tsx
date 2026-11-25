import { useState } from "react";
import { SwipeToDismiss } from "@gem-org/gemsitions/swipe-to-dismiss";
import { SWIPE_LIST_ITEMS } from "./demo.ts";
import "./swipe-to-dismiss-demo.css";
import "./swipe-to-dismiss-overrides.css";

type MarkOverrideSwipeToDismissProps = {
  copy: string;
};

export function MarkOverrideSwipeToDismiss({ copy }: MarkOverrideSwipeToDismissProps) {
  const [hidden, setHidden] = useState<ReadonlySet<string>>(() => new Set());

  return (
    <div className="swipe-to-dismiss-demo">
      <div className="swipe-to-dismiss-demo__list">
        {SWIPE_LIST_ITEMS.map((label) => (
          <SwipeToDismiss
            key={label}
            isIn={!hidden.has(label)}
            markSelected
            classNames={{ root: "mark-override" }}
            onDismiss={() => setHidden((current) => new Set(current).add(label))}
          >
            <div className="swipe-to-dismiss-demo__panel">
              {label}
              <span className="swipe-to-dismiss-demo__copy">{copy}</span>
            </div>
          </SwipeToDismiss>
        ))}
      </div>
    </div>
  );
}
