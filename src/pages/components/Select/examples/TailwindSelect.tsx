import { Select, type SelectOption, type SelectProps } from "@gem-org/gem-system";
import { cn } from "@/lib/cn";

function BrandSelect({ wrapperClassName, ...props }: SelectProps) {
  return (
    <Select
      wrapperClassName={cn(
        "max-w-sm",
        "[--gem-color-accent:var(--gem-palette-secondary-600)] [--gem-color-border:var(--gem-palette-secondary-300)]",
        wrapperClassName,
      )}
      {...props}
    />
  );
}

type TailwindSelectProps = {
  options: readonly SelectOption[];
  texts: { brand: string; brandHelper: string; merged: string; mergedHelper: string };
};

export function TailwindSelect({ options, texts }: TailwindSelectProps) {
  return (
    <>
      <BrandSelect
        label={texts.brand}
        helperText={texts.brandHelper}
        options={options}
        defaultValue="br"
        searchable={false}
      />
      <BrandSelect
        label={texts.merged}
        helperText={texts.mergedHelper}
        options={options}
        multiple
        defaultValue={["cl", "mx"]}
        searchable={false}
        wrapperClassName="max-w-md [--gem-radius-md:var(--gem-radius-full)]"
      />
    </>
  );
}
