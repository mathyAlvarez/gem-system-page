import { EmptyState } from "@gem-org/gem-system";
import { EMPTY_STATE_KINDS, type EmptyStateCopy } from "./demo.ts";
import "./empty-state-demo.css";

type KindsEmptyStateProps = Record<(typeof EMPTY_STATE_KINDS)[number], EmptyStateCopy>;

export function KindsEmptyState(copy: KindsEmptyStateProps) {
  return (
    <div className="empty-state-demo">
      {EMPTY_STATE_KINDS.map((kind) => (
        <EmptyState key={kind} kind={kind} size="sm" bordered {...copy[kind]} />
      ))}
    </div>
  );
}
