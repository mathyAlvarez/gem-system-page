import { Combobox, type ComboboxProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { COUNTRIES } from "./data";

const comboboxVariants = cva("", {
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

type VariantComboboxProps = ComboboxProps & VariantProps<typeof comboboxVariants>;

export function VariantCombobox({
  brand,
  density,
  wrapperClassName,
  ...props
}: VariantComboboxProps) {
  return (
    <Combobox
      wrapperClassName={cn(comboboxVariants({ brand, density }), wrapperClassName)}
      {...props}
    />
  );
}

export function VariantComboboxes() {
  return (
    <>
      <VariantCombobox label='brand="primary"' options={COUNTRIES} defaultValue="ar" />
      <VariantCombobox
        brand="secondary"
        label='brand="secondary"'
        options={COUNTRIES}
        defaultValue="br"
      />
      <VariantCombobox
        brand="tertiary"
        density="compact"
        label='brand="tertiary" density="compact"'
        options={COUNTRIES}
        multiple
        defaultValue={["mx", "pe"]}
      />
    </>
  );
}
