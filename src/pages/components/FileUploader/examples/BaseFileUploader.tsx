import { FileUploader } from "@gem-org/gem-system";

type BaseFileUploaderProps = { label: string; dropLabel: string; browseLabel: string; helperText: string };

export function BaseFileUploader({ label, dropLabel, browseLabel, helperText }: BaseFileUploaderProps) {
  return (
    <FileUploader
      label={label}
      dropLabel={dropLabel}
      browseLabel={browseLabel}
      helperText={helperText}
      simulateUpload
    />
  );
}
