import { FileUploader } from "@gem-org/gem-system";

type DisabledFileUploaderProps = { label: string; helperText: string };

export function DisabledFileUploader({ label, helperText }: DisabledFileUploaderProps) {
  return <FileUploader label={label} isDisabled helperText={helperText} />;
}
