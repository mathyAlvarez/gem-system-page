import { FileUploader } from "@gem-org/gem-system";

type MaxSizeFileUploaderProps = { label: string; helperText: string };

export function MaxSizeFileUploader({ label, helperText }: MaxSizeFileUploaderProps) {
  return (
    <FileUploader
      label={label}
      accept=".pdf,.doc,.docx"
      maxSize={200 * 1024}
      helperText={helperText}
      simulateUpload
    />
  );
}
