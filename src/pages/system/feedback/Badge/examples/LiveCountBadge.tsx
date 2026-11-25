import { useState } from "react";
import { Badge, Button, Checkbox } from "@gem-org/gem-system";
import { Mail } from "@gem-org/gem-system/icons";
import "./badge-demo.css";

type LiveCountBadgeProps = {
  inbox: string;
  unread: string;
  receive: string;
  markRead: string;
  hide: string;
};

export function LiveCountBadge({ inbox, unread, receive, markRead, hide }: LiveCountBadgeProps) {
  const [count, setCount] = useState(3);
  const [hidden, setHidden] = useState(false);

  return (
    <div className="badge-row">
      <Badge
        tone="error"
        variant="solid"
        count={count}
        isInvisible={hidden}
        aria-label={`${count} ${unread}`}
      >
        <Button variant="secondary" iconOnly aria-label={inbox}>
          <Mail />
        </Button>
      </Badge>
      <Button size="sm" onClick={() => setCount((value) => value + 1)}>
        {receive}
      </Button>
      <Button variant="secondary" size="sm" onClick={() => setCount(0)}>
        {markRead}
      </Button>
      <Checkbox
        label={hide}
        checked={hidden}
        onChange={(event) => setHidden(event.target.checked)}
      />
    </div>
  );
}
