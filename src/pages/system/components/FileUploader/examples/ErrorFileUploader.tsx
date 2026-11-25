import { FileUploader } from "@gem-org/gem-system";

type ErrorFileUploaderProps = { label: string; errorMessage: string };

export function ErrorFileUploader({ label, errorMessage }: ErrorFileUploaderProps) {
  return <FileUploader label={label} isRequired errorMessage={errorMessage} simulateUpload />;
}
