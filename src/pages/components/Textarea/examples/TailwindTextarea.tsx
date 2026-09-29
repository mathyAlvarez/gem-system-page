import { Textarea, type TextareaProps } from "@gem-org/gem-system";
import { cn } from "@/lib/cn";

function BrandTextarea({ wrapperClassName, ...props }: TextareaProps) {
  return (
    <Textarea
      wrapperClassName={cn(
        "[--gem-color-accent:var(--gem-palette-secondary-600)]",
        "[--gem-shadow-focus:0_0_0_3px_color-mix(in_srgb,var(--gem-palette-secondary-500)_35%,transparent)]",
        "[--gem-radius-md:var(--gem-radius-xl)]",
        wrapperClassName,
      )}
      {...props}
    />
  );
}

type TailwindTextareaProps = {
  texts: { brand: string; brandHelper: string; merged: string; mergedHelper: string; placeholder: string };
};

export function TailwindTextarea({ texts }: TailwindTextareaProps) {
  return (
    <>
      <BrandTextarea label={texts.brand} placeholder={texts.placeholder} helperText={texts.brandHelper} />
      <BrandTextarea
        label={texts.merged}
        placeholder={texts.placeholder}
        helperText={texts.mergedHelper}
        wrapperClassName="[--gem-radius-md:var(--gem-radius-xs)]"
      />
    </>
  );
}
