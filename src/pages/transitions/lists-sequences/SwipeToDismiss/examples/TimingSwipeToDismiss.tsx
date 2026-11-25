import { useState } from "react";
import { SwipeToDismiss } from "@gem-org/gemsitions/swipe-to-dismiss";
import { SwipeControls } from "./SwipeControls.tsx";
import "./swipe-to-dismiss-demo.css";

type TimingSwipeToDismissProps = {
  restore: string;
  dismiss: string;
  title: string;
  copy: string;
  sibling: string;
};

export function TimingSwipeToDismiss({
  restore,
  dismiss,
  title,
  copy,
  sibling,
}: TimingSwipeToDismissProps) {
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
          duration={{ enter: 280, exit: 200 }}
          easing={{ enter: "standard", exit: "exit" }}
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
