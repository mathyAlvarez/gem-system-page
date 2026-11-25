import { useState } from "react";
import { SwipeToDismiss } from "@gem-org/gemsitions/swipe-to-dismiss";
import { SwipeControls } from "./SwipeControls.tsx";
import "./swipe-to-dismiss-demo.css";

type GestureCallbacksSwipeToDismissProps = {
  restore: string;
  title: string;
  copy: string;
  lastEvent: string;
  progressLabel: string;
  empty: string;
};

export function GestureCallbacksSwipeToDismiss({
  restore,
  title,
  copy,
  lastEvent,
  progressLabel,
  empty,
}: GestureCallbacksSwipeToDismissProps) {
  const [isIn, setIsIn] = useState(true);
  const [log, setLog] = useState(empty);
  const [progress, setProgress] = useState(0);

  return (
    <div className="swipe-to-dismiss-demo">
      <p className="swipe-to-dismiss-demo__status">
        {lastEvent} <strong>{log}</strong>
        {" · "}
        {progressLabel} <strong>{progress.toFixed(2)}</strong>
      </p>
      <SwipeControls restore={restore} isIn={isIn} onRestore={() => setIsIn(true)} />
      <div className="swipe-to-dismiss-demo__stage">
        <SwipeToDismiss
          isIn={isIn}
          onSwipeStart={() => setLog("start")}
          onSwipeMove={(data) => {
            setProgress(data.progress);
            setLog(`move ${data.translation.x.toFixed(0)}px`);
          }}
          onSwipeCancel={() => {
            setLog("cancel");
            setProgress(0);
          }}
          onDismiss={() => {
            setLog("dismiss");
            setIsIn(false);
          }}
        >
          <div className="swipe-to-dismiss-demo__panel">
            {title}
            <span className="swipe-to-dismiss-demo__copy">{copy}</span>
          </div>
        </SwipeToDismiss>
      </div>
    </div>
  );
}
