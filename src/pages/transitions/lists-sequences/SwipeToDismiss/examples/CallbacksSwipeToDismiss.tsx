import { useState } from "react";
import { SwipeToDismiss } from "@gem-org/gemsitions/swipe-to-dismiss";
import { SwipeControls } from "./SwipeControls.tsx";
import "./swipe-to-dismiss-demo.css";

type CallbacksSwipeToDismissProps = {
  restore: string;
  dismiss: string;
  title: string;
  copy: string;
  empty: string;
};

export function CallbacksSwipeToDismiss({
  restore,
  dismiss,
  title,
  copy,
  empty,
}: CallbacksSwipeToDismissProps) {
  const [isIn, setIsIn] = useState(true);
  const [log, setLog] = useState<string[]>([]);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 5));

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
          onDismiss={() => setIsIn(false)}
          onSwipe={(event) => push(`onSwipe · ${event.reason}`)}
          outSwipe={(event) => push(`outSwipe · ${event.reason}`)}
        >
          <div className="swipe-to-dismiss-demo__panel">
            {title}
            <span className="swipe-to-dismiss-demo__copy">{copy}</span>
          </div>
        </SwipeToDismiss>
      </div>
      <ul className="swipe-to-dismiss-demo__event-log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </div>
  );
}
