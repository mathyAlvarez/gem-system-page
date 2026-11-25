import { CopyToClipboard } from "@gem-org/gem-system";
import { INSTALL_COMMAND, type CopyLabels } from "./demo.ts";
import "./copy-demo.css";

const placements = ["top", "right", "bottom", "left"] as const;

type TooltipCopyProps = { labels: CopyLabels };

export function TooltipCopy({ labels }: TooltipCopyProps) {
  return (
    <div className="copy-row">
      {placements.map((placement) => (
        <div key={placement} className="copy-caption">
          <CopyToClipboard
            value={INSTALL_COMMAND}
            variant="secondary"
            tooltipPlacement={placement}
            {...labels}
          />
          <code>{placement}</code>
        </div>
      ))}
      <div className="copy-caption">
        <CopyToClipboard value={INSTALL_COMMAND} variant="secondary" tooltip={false} {...labels} />
        <code>tooltip={"{false}"}</code>
      </div>
    </div>
  );
}
