import { FileUploader } from "@gem-org/gem-system";

type MultipleFileUploaderProps = { label: string; helperText: string };

export function MultipleFileUploader({ label, helperText }: MultipleFileUploaderProps) {
  return (
    <FileUploader label={label} multiple maxFiles={5} helperText={helperText} simulateUpload />
  );
}
