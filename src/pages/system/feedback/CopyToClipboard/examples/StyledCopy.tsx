import { CopyToClipboard } from "@gem-org/gem-system";
import { INSTALL_COMMAND, type CopyLabels } from "./demo.ts";
import "./copy-demo.css";
import "./copy-overrides.css";

type StyledCopyProps = { labels: CopyLabels };

export function StyledCopy({ labels }: StyledCopyProps) {
  return (
    <div className="copy-snippet">
      <code>{INSTALL_COMMAND}</code>
      <CopyToClipboard value={INSTALL_COMMAND} className="copy-branded" {...labels} />
    </div>
  );
}
