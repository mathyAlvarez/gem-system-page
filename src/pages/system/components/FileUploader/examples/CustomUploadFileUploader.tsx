import { FileUploader, type FileUploaderUploadHandler } from "@gem-org/gem-system";

const uploadToApi: FileUploaderUploadHandler = (_file, { onProgress, signal }) =>
  new Promise<void>((resolve, reject) => {
    let progress = 0;
    const tick = () => {
      if (signal.aborted) {
        reject(new DOMException("Aborted", "AbortError"));
        return;
      }
      progress = Math.min(100, progress + 12);
      onProgress(progress);
      if (progress >= 100) resolve();
      else window.setTimeout(tick, 160);
    };
    tick();
  });

type CustomUploadFileUploaderProps = { label: string; helperText: string };

export function CustomUploadFileUploader({ label, helperText }: CustomUploadFileUploaderProps) {
  return <FileUploader label={label} multiple onUpload={uploadToApi} helperText={helperText} />;
}
