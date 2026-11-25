import { CopyToClipboard } from "@gem-org/gem-system";
import { INSTALL_COMMAND, type CopyLabels } from "./demo.ts";
import "./copy-demo.css";

const timeouts = [800, 2000, 5000, 0] as const;

type TimeoutCopyProps = { labels: CopyLabels };

export function TimeoutCopy({ labels }: TimeoutCopyProps) {
  return (
    <div className="copy-row">
      {timeouts.map((timeout) => (
        <div key={timeout} className="copy-caption">
          <CopyToClipboard
            value={INSTALL_COMMAND}
            variant="secondary"
            timeout={timeout}
            {...labels}
          />
          <code>timeout={`{${timeout}}`}</code>
        </div>
      ))}
    </div>
  );
}
