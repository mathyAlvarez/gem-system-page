import { Badge } from "@gem-org/gem-system";

type BaseBadgeProps = { label: string };

export function BaseBadge({ label }: BaseBadgeProps) {
  return <Badge>{label}</Badge>;
}
