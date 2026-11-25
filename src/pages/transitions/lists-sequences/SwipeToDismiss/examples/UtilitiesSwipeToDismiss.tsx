import { useState } from "react";
import { SwipeToDismiss } from "@gem-org/gemsitions/swipe-to-dismiss";
import { SwipeControls } from "./SwipeControls.tsx";
import "./swipe-to-dismiss-demo.css";

type UtilitiesSwipeToDismissProps = {
  restore: string;
  dismiss: string;
  title: string;
  copy: string;
  sibling: string;
};

export function UtilitiesSwipeToDismiss({
  restore,
  dismiss,
  title,
  copy,
  sibling,
}: UtilitiesSwipeToDismissProps) {
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
        <SwipeToDismiss
          isIn={isIn}
          classNames={{ root: "gemst-relative gemst-overflow-hidden" }}
          onDismiss={() => setIsIn(false)}
        >
          <div className="swipe-to-dismiss-demo__panel">
            {title}
            <span className="swipe-to-dismiss-demo__copy">{copy}</span>
          </div>
        </SwipeToDismiss>
      </div>
      <p className="swipe-to-dismiss-demo__sibling">{sibling}</p>
    </div>
  );
}
