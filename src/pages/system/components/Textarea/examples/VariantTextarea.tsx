import { Textarea, type TextareaProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const textareaVariants = cva("", {
  variants: {
    brand: {
      primary: "",
      secondary:
        "[--gem-color-accent:var(--gem-palette-secondary-600)] [--gem-shadow-focus:0_0_0_3px_color-mix(in_srgb,var(--gem-palette-secondary-500)_35%,transparent)]",
      tertiary:
        "[--gem-color-accent:var(--gem-palette-tertiary-600)] [--gem-shadow-focus:0_0_0_3px_color-mix(in_srgb,var(--gem-palette-tertiary-500)_35%,transparent)]",
    },
    shape: {
      rounded: "",
      square: "[--gem-radius-md:var(--gem-radius-xs)]",
    },
  },
  defaultVariants: { brand: "primary", shape: "rounded" },
});

type VariantTextareaProps = TextareaProps & VariantProps<typeof textareaVariants>;

export function VariantTextarea({
  brand,
  shape,
  wrapperClassName,
  ...props
}: VariantTextareaProps) {
  return (
    <Textarea
      wrapperClassName={cn(textareaVariants({ brand, shape }), wrapperClassName)}
      {...props}
    />
  );
}

type VariantTextareasProps = {
  placeholder: string;
};

export function VariantTextareas({ placeholder }: VariantTextareasProps) {
  return (
    <>
      <VariantTextarea
        brand="secondary"
        label='brand="secondary"'
        placeholder={placeholder}
        minRows={2}
      />
      <VariantTextarea
        brand="tertiary"
        shape="square"
        label='brand="tertiary" shape="square"'
        placeholder={placeholder}
        minRows={2}
      />
    </>
  );
}
