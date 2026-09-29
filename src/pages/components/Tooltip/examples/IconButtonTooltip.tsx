import { Tooltip } from "@gem-org/gem-system";
import { Info } from "@gem-org/gem-system/icons";

type IconButtonTooltipProps = { content: string; ariaLabel: string };

export function IconButtonTooltip({ content, ariaLabel }: IconButtonTooltipProps) {
  return (
    <Tooltip content={content}>
      <button type="button" className="gem-field-info" aria-label={ariaLabel}>
        <Info size="sm" strokeWidth={2.1} />
      </button>
    </Tooltip>
  );
}
