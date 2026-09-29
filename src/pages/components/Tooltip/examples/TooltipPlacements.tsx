import { Button, Tooltip, type TooltipPlacement } from "@gem-org/gem-system";

const placements: TooltipPlacement[] = ["top", "bottom", "left", "right"];

type TooltipPlacementsProps = { prefix: string };

export function TooltipPlacements({ prefix }: TooltipPlacementsProps) {
  return (
    <>
      {placements.map((placement) => (
        <Tooltip key={placement} content={`${prefix}: ${placement}`} placement={placement}>
          <Button variant="secondary" size="sm">
            {placement}
          </Button>
        </Tooltip>
      ))}
    </>
  );
}
