import { CopyToClipboard } from "@gem-org/gem-system";
import { INSTALL_COMMAND, type CopyLabels } from "./demo.ts";
import "./copy-demo.css";

const sizes = ["sm", "md", "lg", "xl"] as const;

type SizesCopyProps = { labels: CopyLabels };

export function SizesCopy({ labels }: SizesCopyProps) {
  return (
    <div className="copy-stack">
      <div className="copy-row">
        {sizes.map((size) => (
          <CopyToClipboard
            key={size}
            value={INSTALL_COMMAND}
            variant="secondary"
            size={size}
            {...labels}
          />
        ))}
      </div>
      <div className="copy-row">
        {sizes.map((size) => (
          <CopyToClipboard
            key={size}
            value={INSTALL_COMMAND}
            variant="secondary"
            size={size}
            {...labels}
          >
            {size}
          </CopyToClipboard>
        ))}
      </div>
    </div>
  );
}
