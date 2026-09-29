import { InputNumber, type InputNumberProps } from "@gem-org/gem-system";
import { cn } from "@/lib/cn";

function BrandInputNumber({ wrapperClassName, ...props }: InputNumberProps) {
  return (
    <InputNumber
      wrapperClassName={cn(
        "[--gem-color-accent:var(--gem-palette-secondary-600)]",
        "[--gem-shadow-focus:0_0_0_3px_color-mix(in_srgb,var(--gem-palette-secondary-500)_35%,transparent)]",
        "[--gem-radius-md:var(--gem-radius-full)] [--gem-radius-sm:var(--gem-radius-full)]",
        wrapperClassName,
      )}
      {...props}
    />
  );
}

type TailwindInputNumberProps = {
  texts: { brand: string; brandHelper: string; merged: string; mergedHelper: string };
};

export function TailwindInputNumber({ texts }: TailwindInputNumberProps) {
  return (
    <>
      <BrandInputNumber label={texts.brand} defaultValue={2} helperText={texts.brandHelper} />
      <BrandInputNumber
        label={texts.merged}
        defaultValue={8}
        helperText={texts.mergedHelper}
        wrapperClassName="[--gem-radius-md:var(--gem-radius-xs)]"
      />
    </>
  );
}
