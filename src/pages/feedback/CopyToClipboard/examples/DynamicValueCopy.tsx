import { useState } from "react";
import { CopyToClipboard, InputText } from "@gem-org/gem-system";
import type { CopyLabels } from "./demo.ts";
import "./copy-demo.css";

type DynamicValueCopyProps = { labels: CopyLabels; label: string; placeholder: string; copyLink: string };

export function DynamicValueCopy({ labels, label, placeholder, copyLink }: DynamicValueCopyProps) {
  const [query, setQuery] = useState("");

  const buildLink = () => {
    const url = new URL("https://example.com/search");
    if (query.trim()) url.searchParams.set("q", query.trim());
    return url.toString();
  };

  return (
    <div className="copy-field">
      <InputText label={label} placeholder={placeholder} value={query} onChange={(event) => setQuery(event.target.value)} />
      <CopyToClipboard value={buildLink} variant="secondary" {...labels}>
        {copyLink}
      </CopyToClipboard>
    </div>
  );
}
