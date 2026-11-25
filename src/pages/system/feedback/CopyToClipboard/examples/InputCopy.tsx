import { CopyToClipboard, InputText } from "@gem-org/gem-system";
import type { CopyLabels } from "./demo.ts";
import "./copy-demo.css";

const apiKey = "gem_live_4f8c2a91e0b3";

type InputCopyProps = { labels: CopyLabels; label: string; copyAriaLabel: string };

export function InputCopy({ labels, label, copyAriaLabel }: InputCopyProps) {
  return (
    <div className="copy-field">
      <InputText label={label} value={apiKey} readOnly />
      <CopyToClipboard
        value={apiKey}
        variant="secondary"
        rounded
        {...labels}
        copyAriaLabel={copyAriaLabel}
      />
    </div>
  );
}
