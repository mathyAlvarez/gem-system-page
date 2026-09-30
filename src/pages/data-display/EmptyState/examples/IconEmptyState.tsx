import { EmptyState } from "@gem-org/gem-system";
import { Bell } from "@gem-org/gem-system/icons";
import type { EmptyStateCopy } from "./demo.ts";
import "./empty-state-demo.css";

type IconEmptyStateProps = { icon: EmptyStateCopy; hidden: EmptyStateCopy };

export function IconEmptyState({ icon, hidden }: IconEmptyStateProps) {
  return (
    <div className="empty-state-demo">
      <EmptyState bordered icon={<Bell size="xl" strokeWidth={1.7} />} {...icon} />
      <EmptyState bordered hideIcon size="sm" {...hidden} />
    </div>
  );
}
