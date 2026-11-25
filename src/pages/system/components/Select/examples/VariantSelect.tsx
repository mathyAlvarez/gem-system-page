import { Select, type SelectOption, type SelectProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const selectVariants = cva("", {
  variants: {
    brand: {
      primary: "",
      secondary:
        "[--gem-color-accent:var(--gem-palette-secondary-600)] [--gem-color-border:var(--gem-palette-secondary-300)]",
      tertiary:
        "[--gem-color-accent:var(--gem-palette-tertiary-600)] [--gem-color-border:var(--gem-palette-tertiary-300)]",
    },
    density: {
      comfortable: "",
      compact: "[--gem-radius-md:var(--gem-radius-xs)] [--gem-radius-sm:var(--gem-radius-xs)]",
    },
  },
  defaultVariants: { brand: "primary", density: "comfortable" },
});

type VariantSelectProps = SelectProps & VariantProps<typeof selectVariants>;

export function VariantSelect({ brand, density, wrapperClassName, ...props }: VariantSelectProps) {
  return (
    <Select
      wrapperClassName={cn(selectVariants({ brand, density }), wrapperClassName)}
      {...props}
    />
  );
}

export function VariantSelects({ options }: { options: readonly SelectOption[] }) {
  return (
    <>
      <VariantSelect
        label='brand="primary"'
        options={options}
        defaultValue="br"
        searchable={false}
      />
      <VariantSelect
        brand="secondary"
        label='brand="secondary"'
        options={options}
        defaultValue="ca"
        searchable={false}
      />
      <VariantSelect
        brand="tertiary"
        density="compact"
        label='brand="tertiary" density="compact"'
        options={options}
        multiple
        defaultValue={["fr", "it"]}
        searchable={false}
      />
    </>
  );
}
