import { useState } from "react";
import { SwipeToDismiss } from "@gem-org/gemsitions/swipe-to-dismiss";
import { SwipeControls } from "./SwipeControls.tsx";
import "./swipe-to-dismiss-demo.css";
import "./swipe-to-dismiss-overrides.css";

type StyledSwipeToDismissProps = {
  restore: string;
  dismiss: string;
  title: string;
  copy: string;
};

export function StyledSwipeToDismiss({ restore, dismiss, title, copy }: StyledSwipeToDismissProps) {
  const [isIn, setIsIn] = useState(true);

  return (
    <div className="swipe-to-dismiss-demo">
      <SwipeControls
        restore={restore}
        dismiss={dismiss}
        isIn={isIn}
        onRestore={() => setIsIn(true)}
        onDismiss={() => setIsIn(false)}
      />
      <div className="swipe-to-dismiss-demo__stage">
        <SwipeToDismiss className="card-shell" isIn={isIn} onDismiss={() => setIsIn(false)}>
          <div className="swipe-to-dismiss-demo__panel">
            {title}
            <span className="swipe-to-dismiss-demo__copy">{copy}</span>
          </div>
        </SwipeToDismiss>
      </div>
    </div>
  );
}
