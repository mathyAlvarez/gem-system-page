import { FileUploader } from "@gem-org/gem-system";

type MinMaxFileUploaderProps = {
  label: string;
  dropLabel: string;
  browseLabel: string;
  allowedText: string;
  helperText: string;
};

export function MinMaxFileUploader({ label, dropLabel, browseLabel, allowedText, helperText }: MinMaxFileUploaderProps) {
  return (
    <FileUploader
      label={label}
      multiple
      minFiles={2}
      maxFiles={4}
      fileTypes="jpg/png/pdf"
      dropLabel={dropLabel}
      browseLabel={browseLabel}
      allowedText={allowedText}
      helperText={helperText}
      simulateUpload
    />
  );
}
