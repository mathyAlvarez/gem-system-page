import { Button, Tooltip } from "@gem-org/gem-system";

type DisabledTooltipProps = { content: string; label: string };

export function DisabledTooltip({ content, label }: DisabledTooltipProps) {
  return (
    <Tooltip content={content} disabled>
      <Button variant="secondary">{label}</Button>
    </Tooltip>
  );
}
