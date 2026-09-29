import { Button, Tooltip } from "@gem-org/gem-system";

type LongContentTooltipProps = { content: string; label: string };

export function LongContentTooltip({ content, label }: LongContentTooltipProps) {
  return (
    <Tooltip content={content} placement="bottom">
      <Button variant="primary">{label}</Button>
    </Tooltip>
  );
}
