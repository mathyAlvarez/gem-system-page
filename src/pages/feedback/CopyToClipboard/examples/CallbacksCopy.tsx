import { CopyToClipboard, toast } from "@gem-org/gem-system";
import type { CopyLabels } from "./demo.ts";
import "./copy-demo.css";

type CallbacksCopyProps = {
  labels: CopyLabels;
  copyCode: string;
  failCopy: string;
  copied: string;
  failed: string;
};

const coupon = "WELCOME-2026";

export function CallbacksCopy({ labels, copyCode, failCopy, copied, failed }: CallbacksCopyProps) {
  return (
    <div className="copy-row">
      <CopyToClipboard
        value={coupon}
        variant="secondary"
        {...labels}
        onCopied={(value) => toast.success(`${copied}: ${value}`)}
      >
        {copyCode}
      </CopyToClipboard>
      <CopyToClipboard
        value={() => {
          throw new Error(failed);
        }}
        variant="secondary"
        {...labels}
        onError={(error) => toast.error(error.message)}
      >
        {failCopy}
      </CopyToClipboard>
    </div>
  );
}
