import { OtpInput, type OtpInputProps } from "@gem-org/gem-system";
import { cn } from "@/lib/cn";

function BrandOtpInput({ wrapperClassName, ...props }: OtpInputProps) {
  return (
    <OtpInput
      wrapperClassName={cn(
        "[--gem-color-accent:var(--gem-palette-secondary-600)]",
        "[--gem-shadow-focus:0_0_0_3px_color-mix(in_srgb,var(--gem-palette-secondary-500)_35%,transparent)]",
        "[--gem-radius-md:var(--gem-radius-full)]",
        wrapperClassName,
      )}
      {...props}
    />
  );
}

type TailwindOtpInputProps = {
  texts: { brand: string; brandHelper: string; merged: string; mergedHelper: string };
};

export function TailwindOtpInput({ texts }: TailwindOtpInputProps) {
  return (
    <>
      <BrandOtpInput label={texts.brand} defaultValue="482" helperText={texts.brandHelper} />
      <BrandOtpInput
        label={texts.merged}
        defaultValue="482"
        helperText={texts.mergedHelper}
        wrapperClassName="[--gem-radius-md:var(--gem-radius-xs)]"
      />
    </>
  );
}
