import { Button, Tooltip } from "@gem-org/gem-system";

type InstantTooltipProps = { content: string; label: string };

export function InstantTooltip({ content, label }: InstantTooltipProps) {
  return (
    <Tooltip content={content} delay={0}>
      <Button variant="tertiary">{label}</Button>
    </Tooltip>
  );
}
