import { FileUploader, type FileUploaderProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const fileUploaderVariants = cva("", {
  variants: {
    brand: {
      primary: "",
      secondary:
        "[--gem-color-accent:var(--gem-palette-secondary-600)] [--gem-color-primary-500:var(--gem-palette-secondary-500)]",
      tertiary:
        "[--gem-color-accent:var(--gem-palette-tertiary-600)] [--gem-color-primary-500:var(--gem-palette-tertiary-500)]",
    },
    shape: {
      rounded: "",
      square: "[--gem-radius-md:var(--gem-radius-xs)] [--gem-radius-sm:var(--gem-radius-xs)]",
    },
  },
  defaultVariants: { brand: "primary", shape: "rounded" },
});

type VariantFileUploaderProps = FileUploaderProps & VariantProps<typeof fileUploaderVariants>;

export function VariantFileUploader({
  brand,
  shape,
  wrapperClassName,
  ...props
}: VariantFileUploaderProps) {
  return (
    <FileUploader
      wrapperClassName={cn(fileUploaderVariants({ brand, shape }), wrapperClassName)}
      {...props}
    />
  );
}

export function VariantFileUploaders() {
  return (
    <>
      <VariantFileUploader brand="secondary" label='brand="secondary"' simulateUpload />
      <VariantFileUploader
        brand="tertiary"
        shape="square"
        label='brand="tertiary" shape="square"'
        simulateUpload
      />
    </>
  );
}
