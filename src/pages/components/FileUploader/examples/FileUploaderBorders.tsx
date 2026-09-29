import { FileUploader, type FileUploaderBorder } from "@gem-org/gem-system";

const borders: FileUploaderBorder[] = [
  "default",
  "outlined",
  "primary",
  "success",
  "warning",
  "error",
  "info",
  "borderless",
];

export function FileUploaderBorders() {
  return (
    <>
      {borders.map((border) => (
        <FileUploader
          key={border}
          border={border}
          label={`${border[0].toUpperCase()}${border.slice(1)}`}
          helperText={`border="${border}"`}
          simulateUpload
        />
      ))}
    </>
  );
}
