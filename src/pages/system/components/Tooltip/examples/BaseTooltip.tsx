import { Button, Tooltip } from "@gem-org/gem-system";

type BaseTooltipProps = { content: string; label: string };

export function BaseTooltip({ content, label }: BaseTooltipProps) {
  return (
    <Tooltip content={content}>
      <Button variant="secondary">{label}</Button>
    </Tooltip>
  );
}
