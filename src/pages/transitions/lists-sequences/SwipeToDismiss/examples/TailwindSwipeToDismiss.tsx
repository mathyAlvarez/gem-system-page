import { useState } from "react";
import { SwipeToDismiss } from "@gem-org/gemsitions/swipe-to-dismiss";
import { SwipeControls } from "./SwipeControls.tsx";
import "./swipe-to-dismiss-demo.css";

type TailwindSwipeToDismissProps = {
  restore: string;
  dismiss: string;
  title: string;
  copy: string;
};

export function TailwindSwipeToDismiss({
  restore,
  dismiss,
  title,
  copy,
}: TailwindSwipeToDismissProps) {
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
          duration={360}
          className="[--gemst-swipe-easing:var(--gemst-easing-emphasized)]"
          onDismiss={() => setIsIn(false)}
        >
          <div className="rounded-[var(--gem-radius-lg)] bg-[var(--gem-color-bg-subtle)] px-4 py-3 text-sm font-semibold text-[var(--gem-color-fg)] shadow-[var(--gem-shadow-sm)]">
            {title}
            <span className="mt-1 block text-xs font-normal text-[var(--gem-color-fg-muted)]">
              {copy}
            </span>
          </div>
        </SwipeToDismiss>
      </div>
    </div>
  );
}
