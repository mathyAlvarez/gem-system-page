import { FileUploader } from "@gem-org/gem-system";

type ButtonOnlyFileUploaderProps = { label: string; helperText: string };

export function ButtonOnlyFileUploader({ label, helperText }: ButtonOnlyFileUploaderProps) {
  return <FileUploader label={label} droppable={false} helperText={helperText} simulateUpload />;
}
