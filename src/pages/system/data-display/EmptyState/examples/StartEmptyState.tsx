import { Button, EmptyState } from "@gem-org/gem-system";
import "./empty-state-demo.css";

type StartEmptyStateProps = { title: string; description: string; settings: string };

export function StartEmptyState({ title, description, settings }: StartEmptyStateProps) {
  return (
    <div className="empty-state-demo">
      <EmptyState
        align="start"
        bordered
        radius="lg"
        title={title}
        description={description}
        action={
          <Button variant="primary" size="sm">
            {settings}
          </Button>
        }
      />
    </div>
  );
}
