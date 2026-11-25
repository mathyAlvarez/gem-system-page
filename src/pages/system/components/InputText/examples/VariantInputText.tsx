import { InputText, type InputTextProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const inputTextVariants = cva("", {
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
      pill: "[--gem-radius-md:var(--gem-radius-full)]",
    },
  },
  defaultVariants: { brand: "primary", shape: "rounded" },
});

type VariantInputTextProps = InputTextProps & VariantProps<typeof inputTextVariants>;

export function VariantInputText({
  brand,
  shape,
  wrapperClassName,
  ...props
}: VariantInputTextProps) {
  return (
    <InputText
      wrapperClassName={cn(inputTextVariants({ brand, shape }), wrapperClassName)}
      {...props}
    />
  );
}

export function VariantInputTexts() {
  return (
    <>
      <VariantInputText brand="secondary" label='brand="secondary"' placeholder="gem-system" />
      <VariantInputText
        brand="tertiary"
        shape="pill"
        label='brand="tertiary" shape="pill"'
        placeholder="gem-system"
      />
    </>
  );
}
