import { Card, Fab, Typography, toast } from "@gem-org/gem-system";
import { Plus } from "@gem-org/gem-system/icons";
import "./fab-demo.css";

type OnCardFabProps = { title: string; subtitle: string; body: string; action: string; added: string };

export function OnCardFab({ title, subtitle, body, action, added }: OnCardFabProps) {
  return (
    <div className="fab-card-wrap">
      <Card bordered shadow="sm" title={title} subtitle={subtitle} classNames={{ root: "min-h-56" }}>
        <Typography variant="body">{body}</Typography>
      </Card>
      <Fab
        position="absolute"
        offset={16}
        size="sm"
        icon={<Plus />}
        aria-label={action}
        onClick={() => toast.success(added)}
      />
    </div>
  );
}
