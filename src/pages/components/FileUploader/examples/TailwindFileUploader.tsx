import { FileUploader, type FileUploaderProps } from "@gem-org/gem-system";
import { cn } from "@/lib/cn";

function BrandFileUploader({ wrapperClassName, ...props }: FileUploaderProps) {
  return (
    <FileUploader
      wrapperClassName={cn(
        "[--gem-color-accent:var(--gem-palette-secondary-600)] [--gem-color-primary-500:var(--gem-palette-secondary-500)]",
        "[--gem-radius-md:var(--gem-radius-lg)]",
        wrapperClassName,
      )}
      {...props}
    />
  );
}

type TailwindFileUploaderProps = {
  texts: { brand: string; brandHelper: string; merged: string; mergedHelper: string };
};

export function TailwindFileUploader({ texts }: TailwindFileUploaderProps) {
  return (
    <>
      <BrandFileUploader label={texts.brand} helperText={texts.brandHelper} simulateUpload />
      <BrandFileUploader
        label={texts.merged}
        helperText={texts.mergedHelper}
        multiple
        simulateUpload
        wrapperClassName="[--gem-radius-md:var(--gem-radius-2xl)]"
      />
    </>
  );
}
