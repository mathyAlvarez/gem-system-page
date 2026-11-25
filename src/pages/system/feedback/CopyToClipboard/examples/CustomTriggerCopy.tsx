import { Button, CopyToClipboard } from "@gem-org/gem-system";
import { Share } from "@gem-org/gem-system/icons";
import { INSTALL_COMMAND, type CopyLabels } from "./demo.ts";
import "./copy-demo.css";

type CustomTriggerCopyProps = {
  labels: CopyLabels;
  copyCommand: string;
  copyLink: string;
  linkCopied: string;
  link: string;
};

export function CustomTriggerCopy({
  labels,
  copyCommand,
  copyLink,
  linkCopied,
  link,
}: CustomTriggerCopyProps) {
  return (
    <div className="copy-row">
      <CopyToClipboard value={INSTALL_COMMAND} {...labels}>
        <Button variant="secondary" size="sm">
          {copyCommand}
        </Button>
      </CopyToClipboard>
      <CopyToClipboard value={link} {...labels}>
        {({ copied, copy, disabled }) => (
          <Button
            variant={copied ? "success" : "primary"}
            size="sm"
            leftIcon={<Share size="sm" />}
            disabled={disabled}
            onClick={copy}
          >
            {copied ? linkCopied : copyLink}
          </Button>
        )}
      </CopyToClipboard>
    </div>
  );
}
