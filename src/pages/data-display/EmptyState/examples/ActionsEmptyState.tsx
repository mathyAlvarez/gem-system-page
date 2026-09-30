import { Button, EmptyState } from "@gem-org/gem-system";
import { Plus } from "@gem-org/gem-system/icons";
import "./empty-state-demo.css";

type ActionsEmptyStateProps = { title: string; description: string; create: string; importLabel: string };

export function ActionsEmptyState({ title, description, create, importLabel }: ActionsEmptyStateProps) {
  return (
    <div className="empty-state-demo">
      <EmptyState
        title={title}
        description={description}
        action={
          <Button variant="primary" size="sm" leftIcon={<Plus size="sm" />}>
            {create}
          </Button>
        }
        secondaryAction={
          <Button variant="transparent" size="sm">
            {importLabel}
          </Button>
        }
      />
    </div>
  );
}
