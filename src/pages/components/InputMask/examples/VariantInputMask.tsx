import { InputMask, type InputMaskProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const inputMaskVariants = cva("", {
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

type VariantInputMaskProps = InputMaskProps & VariantProps<typeof inputMaskVariants>;

export function VariantInputMask({ brand, shape, wrapperClassName, ...props }: VariantInputMaskProps) {
  return <InputMask wrapperClassName={cn(inputMaskVariants({ brand, shape }), wrapperClassName)} {...props} />;
}

export function VariantInputMasks() {
  return (
    <>
      <VariantInputMask brand="secondary" label='brand="secondary"' preset="phone" />
      <VariantInputMask brand="tertiary" shape="pill" label='brand="tertiary" shape="pill"' preset="date" />
    </>
  );
}
