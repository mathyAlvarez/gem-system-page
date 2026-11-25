import { Combobox, type ComboboxProps } from "@gem-org/gem-system";
import { cn } from "@/lib/cn";
import { COUNTRIES } from "./data";

function BrandCombobox({ wrapperClassName, ...props }: ComboboxProps) {
  return (
    <Combobox
      wrapperClassName={cn(
        "max-w-sm",
        "[--gem-color-accent:var(--gem-palette-secondary-600)] [--gem-color-border:var(--gem-palette-secondary-300)]",
        wrapperClassName,
      )}
      {...props}
    />
  );
}

type TailwindComboboxProps = {
  texts: { brand: string; brandHelper: string; merged: string; mergedHelper: string };
};

export function TailwindCombobox({ texts }: TailwindComboboxProps) {
  return (
    <>
      <BrandCombobox
        label={texts.brand}
        helperText={texts.brandHelper}
        options={COUNTRIES}
        defaultValue="ar"
      />
      <BrandCombobox
        label={texts.merged}
        helperText={texts.mergedHelper}
        options={COUNTRIES}
        multiple
        defaultValue={["cl", "uy"]}
        wrapperClassName="max-w-md [--gem-radius-md:var(--gem-radius-full)]"
      />
    </>
  );
}
