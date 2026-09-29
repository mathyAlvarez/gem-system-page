import { OtpInput, type OtpInputProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const otpInputVariants = cva("", {
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
      circle: "[--gem-radius-md:var(--gem-radius-full)]",
    },
  },
  defaultVariants: { brand: "primary", shape: "rounded" },
});

type VariantOtpInputProps = OtpInputProps & VariantProps<typeof otpInputVariants>;

export function VariantOtpInput({ brand, shape, wrapperClassName, ...props }: VariantOtpInputProps) {
  return <OtpInput wrapperClassName={cn(otpInputVariants({ brand, shape }), wrapperClassName)} {...props} />;
}

export function VariantOtpInputs() {
  return (
    <>
      <VariantOtpInput brand="secondary" label='brand="secondary"' length={4} defaultValue="48" />
      <VariantOtpInput brand="tertiary" shape="circle" label='brand="tertiary" shape="circle"' length={4} defaultValue="48" />
    </>
  );
}
