import { FileUploader } from "@gem-org/gem-system";

type FileUploaderSizesProps = { labels: { sm: string; md: string; lg: string } };

export function FileUploaderSizes({ labels }: FileUploaderSizesProps) {
  return (
    <>
      <FileUploader size="sm" label={labels.sm} simulateUpload />
      <FileUploader size="md" label={labels.md} simulateUpload />
      <FileUploader size="lg" label={labels.lg} simulateUpload />
    </>
  );
}
