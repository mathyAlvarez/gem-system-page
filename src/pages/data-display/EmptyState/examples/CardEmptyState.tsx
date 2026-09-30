import { Button, Card, CardBody, EmptyState } from "@gem-org/gem-system";
import { Plus } from "@gem-org/gem-system/icons";
import "./empty-state-demo.css";

type CardEmptyStateProps = { title: string; description: string; create: string };

export function CardEmptyState({ title, description, create }: CardEmptyStateProps) {
  return (
    <div className="empty-state-demo">
      <Card bordered>
        <CardBody>
          <EmptyState
            kind="search"
            minHeight={220}
            title={title}
            description={description}
            action={
              <Button variant="primary" size="sm" leftIcon={<Plus size="sm" />}>
                {create}
              </Button>
            }
          />
        </CardBody>
      </Card>
    </div>
  );
}
