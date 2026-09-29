import { FileUploader } from "@gem-org/gem-system";

type ButtonOnlyMultipleFileUploaderProps = { label: string; helperText: string };

export function ButtonOnlyMultipleFileUploader({ label, helperText }: ButtonOnlyMultipleFileUploaderProps) {
  return (
    <FileUploader label={label} droppable={false} multiple maxFiles={5} helperText={helperText} simulateUpload />
  );
}
