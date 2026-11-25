import { useState } from "react";
import { SwipeToDismiss } from "@gem-org/gemsitions/swipe-to-dismiss";
import { SwipeControls } from "./SwipeControls.tsx";
import "./swipe-to-dismiss-demo.css";

type AsChildSwipeToDismissProps = {
  restore: string;
  title: string;
  copy: string;
};

export function AsChildSwipeToDismiss({ restore, title, copy }: AsChildSwipeToDismissProps) {
  const [isIn, setIsIn] = useState(true);

  return (
    <div className="swipe-to-dismiss-demo">
      <SwipeControls restore={restore} isIn={isIn} onRestore={() => setIsIn(true)} />
      <div className="swipe-to-dismiss-demo__stage">
        <SwipeToDismiss asChild isIn={isIn} onDismiss={() => setIsIn(false)}>
          <article className="swipe-to-dismiss-demo__panel">
            {title}
            <span className="swipe-to-dismiss-demo__copy">{copy}</span>
          </article>
        </SwipeToDismiss>
      </div>
    </div>
  );
}
