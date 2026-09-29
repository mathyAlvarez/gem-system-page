import { useState } from "react";
import { FileUploader, Typography } from "@gem-org/gem-system";

type ControlledFileUploaderProps = { label: string; filesLabel: string; empty: string };

export function ControlledFileUploader({ label, filesLabel, empty }: ControlledFileUploaderProps) {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <>
      <FileUploader label={label} multiple simulateUpload value={files} onChange={(next) => setFiles(next)} />
      <Typography variant="caption">
        {filesLabel}: <code>{files.length === 0 ? empty : files.map((file) => file.name).join(", ")}</code>
      </Typography>
    </>
  );
}
