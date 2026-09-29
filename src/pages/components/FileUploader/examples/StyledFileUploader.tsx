import { FileUploader } from "@gem-org/gem-system";
import "./file-uploader-overrides.css";

type StyledFileUploaderProps = { label: string; helperText: string };

export function StyledFileUploader({ label, helperText }: StyledFileUploaderProps) {
  return (
    <FileUploader
      label={label}
      helperText={helperText}
      multiple
      simulateUpload
      wrapperClassName="file-uploader-branded"
    />
  );
}
