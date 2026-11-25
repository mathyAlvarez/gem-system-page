import { EmptyState } from "@gem-org/gem-system";
import type { EmptyStateCopy } from "./demo.ts";
import "./empty-state-demo.css";

export function BaseEmptyState({ title, description }: EmptyStateCopy) {
  return (
    <div className="empty-state-demo">
      <EmptyState title={title} description={description} />
    </div>
  );
}
