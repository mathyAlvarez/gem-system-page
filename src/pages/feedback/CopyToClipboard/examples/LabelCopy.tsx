import { CopyToClipboard } from "@gem-org/gem-system";
import { INSTALL_COMMAND, type CopyLabels } from "./demo.ts";

type LabelCopyProps = { labels: CopyLabels; text: string };

export function LabelCopy({ labels, text }: LabelCopyProps) {
  return (
    <CopyToClipboard value={INSTALL_COMMAND} variant="secondary" {...labels}>
      {text}
    </CopyToClipboard>
  );
}
