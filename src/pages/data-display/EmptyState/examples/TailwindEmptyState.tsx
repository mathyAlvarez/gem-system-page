import { Button, EmptyState } from "@gem-org/gem-system";
import { Upload } from "@gem-org/gem-system/icons";
import "./empty-state-demo.css";

type TailwindEmptyStateProps = { title: string; description: string; action: string };

export function TailwindEmptyState({ title, description, action }: TailwindEmptyStateProps) {
  return (
    <div className="empty-state-demo">
      <EmptyState
        icon={<Upload size="xl" strokeWidth={1.7} />}
        bordered
        radius="lg"
        title={title}
        description={description}
        className="border-dashed border-(--gem-color-primary-500) bg-(--gem-color-primary-50) [--gem-empty-state-icon-bg:var(--gem-color-primary-100)] [--gem-empty-state-icon-fg:var(--gem-color-primary-700)]"
        classNames={{
          icon: "ring-4 ring-(--gem-color-primary-50)",
          title: "tracking-tight",
        }}
        action={
          <Button variant="primary" size="sm">
            {action}
          </Button>
        }
      />
    </div>
  );
}
