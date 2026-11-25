import { FileUploader } from "@gem-org/gem-system";

type TooltipFileUploaderProps = { label: string; infoText: string };

export function TooltipFileUploader({ label, infoText }: TooltipFileUploaderProps) {
  return (
    <FileUploader
      label={label}
      infoText={infoText}
      multiple
      accept=".pdf,.jpg,.jpeg,.png"
      maxSize={5 * 1024 * 1024}
      simulateUpload
    />
  );
}
