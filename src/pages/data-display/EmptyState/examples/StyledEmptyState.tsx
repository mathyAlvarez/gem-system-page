import { Button, EmptyState } from "@gem-org/gem-system";
import { Users } from "@gem-org/gem-system/icons";
import "./empty-state-demo.css";
import "./empty-state-overrides.css";

type StyledEmptyStateProps = { title: string; description: string; action: string };

export function StyledEmptyState({ title, description, action }: StyledEmptyStateProps) {
  return (
    <div className="empty-state-demo">
      <EmptyState
        className="empty-state-branded"
        bordered
        radius="lg"
        icon={<Users size="xl" strokeWidth={1.7} />}
        title={title}
        description={description}
        action={
          <Button variant="secondary" size="sm">
            {action}
          </Button>
        }
      />
    </div>
  );
}
