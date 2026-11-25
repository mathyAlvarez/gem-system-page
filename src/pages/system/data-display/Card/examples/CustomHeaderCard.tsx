import { Avatar, Button, Card } from "@gem-org/gem-system";
import { MoreHorizontal } from "@gem-org/gem-system/icons";
import type { CardCommon } from "./demo.ts";
import "./card-demo.css";

type CustomHeaderCardProps = {
  common: CardCommon;
  name: string;
  role: string;
  text: string;
  compoundText: string;
  follow: string;
};

function Author({ name, role }: { name: string; role: string }) {
  return (
    <div className="card-author">
      <Avatar size="sm" name={name} />
      <div className="card-author__meta">
        <span className="card-author__name">{name}</span>
        <span className="card-author__role">{role}</span>
      </div>
    </div>
  );
}

export function CustomHeaderCard({
  common,
  name,
  role,
  text,
  compoundText,
  follow,
}: CustomHeaderCardProps) {
  return (
    <div className="card-stack">
      <Card
        header={<Author name={name} role={role} />}
        extra={
          <Button variant="transparent" size="sm" iconOnly aria-label={common.more}>
            <MoreHorizontal size="sm" />
          </Button>
        }
      >
        {text}
      </Card>
      <Card shadow="sm">
        <Card.Header
          extra={
            <Button variant="secondary" size="sm">
              {follow}
            </Button>
          }
        >
          <Author name={name} role={role} />
        </Card.Header>
        <Card.Body>{compoundText}</Card.Body>
      </Card>
    </div>
  );
}
