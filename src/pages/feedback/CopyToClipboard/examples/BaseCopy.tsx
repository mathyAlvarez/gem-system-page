import { CopyToClipboard } from "@gem-org/gem-system";
import { INSTALL_COMMAND, type CopyLabels } from "./demo.ts";
import "./copy-demo.css";

type BaseCopyProps = { labels: CopyLabels };

export function BaseCopy({ labels }: BaseCopyProps) {
  return (
    <div className="copy-snippet">
      <code>{INSTALL_COMMAND}</code>
      <CopyToClipboard value={INSTALL_COMMAND} size="sm" {...labels} />
    </div>
  );
}
