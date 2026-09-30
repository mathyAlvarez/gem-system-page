import { CopyToClipboard } from "@gem-org/gem-system";
import { INSTALL_COMMAND, type CopyLabels } from "./demo.ts";
import "./copy-demo.css";

const variants = [
  "primary",
  "secondary",
  "tertiary",
  "transparent",
  "danger",
  "success",
  "warning",
  "info",
  "neutral",
  "link",
] as const;

type VariantsCopyProps = { labels: CopyLabels };

export function VariantsCopy({ labels }: VariantsCopyProps) {
  return (
    <div className="copy-row">
      {variants.map((variant) => (
        <CopyToClipboard key={variant} value={INSTALL_COMMAND} variant={variant} size="sm" {...labels}>
          {variant}
        </CopyToClipboard>
      ))}
    </div>
  );
}
