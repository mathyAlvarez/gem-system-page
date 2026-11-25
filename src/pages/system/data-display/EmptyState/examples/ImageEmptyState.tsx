import { Button, EmptyState, Link, Typography } from "@gem-org/gem-system";
import { Folder, Plus } from "@gem-org/gem-system/icons";
import "./empty-state-demo.css";

type ImageEmptyStateProps = {
  title: string;
  description: string;
  create: string;
  help: string;
  link: string;
};

export function ImageEmptyState({ title, description, create, help, link }: ImageEmptyStateProps) {
  return (
    <div className="empty-state-demo">
      <EmptyState
        bordered
        radius="lg"
        image={
          <span className="empty-state-illustration" aria-hidden>
            <Folder size="2xl" />
          </span>
        }
        title={title}
        description={description}
        action={
          <Button variant="secondary" size="sm" leftIcon={<Plus size="sm" />}>
            {create}
          </Button>
        }
      >
        <Typography variant="caption" as="p">
          {help} <Link href="/system/getting-started">{link}</Link>
        </Typography>
      </EmptyState>
    </div>
  );
}
