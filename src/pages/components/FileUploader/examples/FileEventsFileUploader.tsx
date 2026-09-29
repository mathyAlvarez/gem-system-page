import { useState } from "react";
import { FileUploader, Typography } from "@gem-org/gem-system";

type FileEventsFileUploaderProps = {
  label: string;
  lastEventLabel: string;
  filesLabel: string;
  added: string;
  removed: string;
  empty: string;
};

export function FileEventsFileUploader({
  label,
  lastEventLabel,
  filesLabel,
  added,
  removed,
  empty,
}: FileEventsFileUploaderProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [lastEvent, setLastEvent] = useState(empty);

  return (
    <>
      <FileUploader
        label={label}
        multiple
        minFiles={1}
        maxFiles={4}
        fileTypes="csv/xlsx/pdf"
        simulateUpload
        onFileAdded={(next) => {
          setFiles(next);
          setLastEvent(added);
        }}
        onFileRemoved={(next) => {
          setFiles(next);
          setLastEvent(removed);
        }}
      />
      <Typography variant="caption">
        {lastEventLabel}: <code>{lastEvent}</code>
      </Typography>
      <Typography variant="caption">
        {filesLabel}: <code>{files.length === 0 ? empty : files.map((file) => file.name).join(", ")}</code>
      </Typography>
    </>
  );
}
