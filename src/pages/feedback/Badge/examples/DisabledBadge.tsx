import { Badge } from "@gem-org/gem-system";
import "./badge-demo.css";

type DisabledBadgeProps = { active: string; locked: string; remove: string };

export function DisabledBadge({ active, locked, remove }: DisabledBadgeProps) {
  return (
    <div className="badge-row">
      <Badge tone="secondary" isClosable closeAriaLabel={`${remove} ${active}`}>
        {active}
      </Badge>
      <Badge tone="secondary" isClosable isDisabled closeAriaLabel={`${remove} ${locked}`}>
        {locked}
      </Badge>
    </div>
  );
}
