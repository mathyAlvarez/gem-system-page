import { InputSearch, type InputSearchProps } from "@gem-org/gem-system";
import { cn } from "@/lib/cn";

function BrandInputSearch({ wrapperClassName, ...props }: InputSearchProps) {
  return (
    <InputSearch
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

type TailwindInputSearchProps = {
  texts: {
    brand: string;
    brandHelper: string;
    merged: string;
    mergedHelper: string;
    value: string;
  };
};

export function TailwindInputSearch({ texts }: TailwindInputSearchProps) {
  return (
    <>
      <BrandInputSearch
        label={texts.brand}
        defaultValue={texts.value}
        helperText={texts.brandHelper}
      />
      <BrandInputSearch
        label={texts.merged}
        defaultValue={texts.value}
        helperText={texts.mergedHelper}
        wrapperClassName="[--gem-radius-md:var(--gem-radius-xs)]"
      />
    </>
  );
}
