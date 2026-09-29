import { InputPassword, type InputPasswordProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const inputPasswordVariants = cva("", {
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

type VariantInputPasswordProps = InputPasswordProps & VariantProps<typeof inputPasswordVariants>;

export function VariantInputPassword({ brand, shape, wrapperClassName, ...props }: VariantInputPasswordProps) {
  return <InputPassword wrapperClassName={cn(inputPasswordVariants({ brand, shape }), wrapperClassName)} {...props} />;
}

export function VariantInputPasswords() {
  return (
    <>
      <VariantInputPassword brand="secondary" label='brand="secondary"' defaultValue="opensesame" />
      <VariantInputPassword
        brand="tertiary"
        shape="pill"
        label='brand="tertiary" shape="pill"'
        defaultValue="opensesame"
      />
    </>
  );
}
