import { CopyToClipboard } from "@gem-org/gem-system";
import { INSTALL_COMMAND, type CopyLabels } from "./demo.ts";
import "./copy-demo.css";

type DisabledCopyProps = { labels: CopyLabels };

export function DisabledCopy({ labels }: DisabledCopyProps) {
  return (
    <div className="copy-row">
      <CopyToClipboard value={INSTALL_COMMAND} variant="secondary" disabled {...labels} />
      <CopyToClipboard value={INSTALL_COMMAND} variant="secondary" disabled {...labels}>
        {labels.label}
      </CopyToClipboard>
    </div>
  );
}
