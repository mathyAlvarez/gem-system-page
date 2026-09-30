import { EmptyState } from "@gem-org/gem-system";
import { EMPTY_STATE_SIZES } from "./demo.ts";
import "./empty-state-demo.css";

type SizesEmptyStateProps = { title: string; description: string };

export function SizesEmptyState({ title, description }: SizesEmptyStateProps) {
  return (
    <div className="empty-state-demo">
      {EMPTY_STATE_SIZES.map((size) => (
        <EmptyState key={size} size={size} bordered title={`${title} ${size}`} description={description} />
      ))}
    </div>
  );
}
