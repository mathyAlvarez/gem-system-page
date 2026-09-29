import { InputMask, type InputMaskProps } from "@gem-org/gem-system";
import { cn } from "@/lib/cn";

function BrandInputMask({ wrapperClassName, ...props }: InputMaskProps) {
  return (
    <InputMask
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

type TailwindInputMaskProps = {
  texts: { brand: string; brandHelper: string; merged: string; mergedHelper: string };
};

export function TailwindInputMask({ texts }: TailwindInputMaskProps) {
  return (
    <>
      <BrandInputMask label={texts.brand} preset="phone" prefix="Tel" helperText={texts.brandHelper} />
      <BrandInputMask
        label={texts.merged}
        preset="card"
        helperText={texts.mergedHelper}
        wrapperClassName="[--gem-radius-md:var(--gem-radius-xs)]"
      />
    </>
  );
}
