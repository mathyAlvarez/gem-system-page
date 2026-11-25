import { FileUploader } from "@gem-org/gem-system";

type ImagesFileUploaderProps = {
  label: string;
  dropLabel: string;
  browseLabel: string;
  allowedText: string;
  helperText: string;
};

export function ImagesFileUploader({
  label,
  dropLabel,
  browseLabel,
  allowedText,
  helperText,
}: ImagesFileUploaderProps) {
  return (
    <FileUploader
      label={label}
      fileTypes="jpg/png"
      dropLabel={dropLabel}
      browseLabel={browseLabel}
      allowedText={allowedText}
      helperText={helperText}
      simulateUpload
    />
  );
}
