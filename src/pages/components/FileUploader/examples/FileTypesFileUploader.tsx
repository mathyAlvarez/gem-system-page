import { FileUploader } from "@gem-org/gem-system";

type FileTypesFileUploaderProps = {
  label: string;
  dropLabel: string;
  browseLabel: string;
  allowedText: string;
  helperText: string;
};

export function FileTypesFileUploader({
  label,
  dropLabel,
  browseLabel,
  allowedText,
  helperText,
}: FileTypesFileUploaderProps) {
  return (
    <FileUploader
      label={label}
      multiple
      fileTypes="jpg/png/csv"
      dropLabel={dropLabel}
      browseLabel={browseLabel}
      allowedText={allowedText}
      helperText={helperText}
      simulateUpload
    />
  );
}
