import { Button } from "@gem-org/gem-system";
import type { FlipListFilterId } from "./demo.ts";

export type FlipControlsProps = {
  shuffle: string;
  reverse?: string;
  all: string;
  early: string;
  late: string;
  filter: FlipListFilterId;
  earlyTitle: string;
  lateTitle: string;
  onShuffle: () => void;
  onReverse?: () => void;
  onFilter: (filter: FlipListFilterId) => void;
};

export function FlipControls({
  shuffle,
  reverse,
  all,
  early,
  late,
  filter,
  earlyTitle,
  lateTitle,
  onShuffle,
  onReverse,
  onFilter,
}: FlipControlsProps) {
  return (
    <div className="flip-list-demo__controls">
      <Button size="sm" variant="secondary" title={shuffle} onClick={onShuffle}>
        {shuffle}
      </Button>
      {onReverse ? (
        <Button size="sm" variant="secondary" title={reverse} onClick={onReverse}>
          {reverse}
        </Button>
      ) : null}
      <Button
        size="sm"
        variant="secondary"
        aria-pressed={filter === "all"}
        onClick={() => onFilter("all")}
      >
        {all}
      </Button>
      <Button
        size="sm"
        variant="secondary"
        aria-pressed={filter === "early"}
        title={earlyTitle}
        onClick={() => onFilter("early")}
      >
        {early}
      </Button>
      <Button
        size="sm"
        variant="secondary"
        aria-pressed={filter === "late"}
        title={lateTitle}
        onClick={() => onFilter("late")}
      >
        {late}
      </Button>
    </div>
  );
}
