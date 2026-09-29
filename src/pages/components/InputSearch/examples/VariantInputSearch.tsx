import { InputSearch, type InputSearchProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const inputSearchVariants = cva("", {
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

type VariantInputSearchProps = InputSearchProps & VariantProps<typeof inputSearchVariants>;

export function VariantInputSearch({ brand, shape, wrapperClassName, ...props }: VariantInputSearchProps) {
  return <InputSearch wrapperClassName={cn(inputSearchVariants({ brand, shape }), wrapperClassName)} {...props} />;
}

export function VariantInputSearches() {
  return (
    <>
      <VariantInputSearch brand="secondary" label='brand="secondary"' defaultValue="gem-system" />
      <VariantInputSearch brand="tertiary" shape="pill" label='brand="tertiary" shape="pill"' defaultValue="gem-system" />
    </>
  );
}
