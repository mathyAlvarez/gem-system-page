import { InputText, type InputTextProps } from "@gem-org/gem-system";
import { cn } from "@/lib/cn";

function BrandInputText({ wrapperClassName, ...props }: InputTextProps) {
  return (
    <InputText
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

type TailwindInputTextProps = {
  texts: { brand: string; brandHelper: string; merged: string; mergedHelper: string; placeholder: string };
};

export function TailwindInputText({ texts }: TailwindInputTextProps) {
  return (
    <>
      <BrandInputText label={texts.brand} placeholder={texts.placeholder} helperText={texts.brandHelper} />
      <BrandInputText
        label={texts.merged}
        placeholder={texts.placeholder}
        helperText={texts.mergedHelper}
        wrapperClassName="[--gem-radius-md:var(--gem-radius-xs)]"
      />
    </>
  );
}
