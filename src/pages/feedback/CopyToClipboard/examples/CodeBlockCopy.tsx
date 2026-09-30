import { CopyToClipboard } from "@gem-org/gem-system";
import type { CopyLabels } from "./demo.ts";
import "./copy-demo.css";

const snippet = `import { Button } from "@gem-org/gem-system";

export function Example() {
  return <Button variant="primary">OK</Button>;
}`;

type CodeBlockCopyProps = { labels: CopyLabels; copyAriaLabel: string };

export function CodeBlockCopy({ labels, copyAriaLabel }: CodeBlockCopyProps) {
  return (
    <div className="copy-code">
      <pre>
        <code>{snippet}</code>
      </pre>
      <CopyToClipboard value={snippet} size="sm" tooltipPlacement="left" {...labels} copyAriaLabel={copyAriaLabel} />
    </div>
  );
}
