import { InputNumber, type InputNumberProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const inputNumberVariants = cva("", {
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
      pill: "[--gem-radius-md:var(--gem-radius-full)] [--gem-radius-sm:var(--gem-radius-full)]",
    },
  },
  defaultVariants: { brand: "primary", shape: "rounded" },
});

type VariantInputNumberProps = InputNumberProps & VariantProps<typeof inputNumberVariants>;

export function VariantInputNumber({
  brand,
  shape,
  wrapperClassName,
  ...props
}: VariantInputNumberProps) {
  return (
    <InputNumber
      wrapperClassName={cn(inputNumberVariants({ brand, shape }), wrapperClassName)}
      {...props}
    />
  );
}

export function VariantInputNumbers() {
  return (
    <>
      <VariantInputNumber brand="secondary" label='brand="secondary"' defaultValue={4} />
      <VariantInputNumber
        brand="tertiary"
        shape="pill"
        label='brand="tertiary" shape="pill"'
        defaultValue={7}
      />
    </>
  );
}
