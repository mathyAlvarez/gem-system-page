import { Checkbox, type CheckboxProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const checkboxVariants = cva("", {
  variants: {
    appearance: {
      plain: "",
      card: "rounded-lg border border-(--gem-color-border) px-4 py-3",
    },
    brand: {
      none: "",
      tertiary:
        "[--gem-checkbox-tone:var(--gem-palette-tertiary-500)] [--gem-checkbox-tone-active:var(--gem-palette-tertiary-600)] [--gem-checkbox-on:var(--gem-palette-neutral-900)]",
    },
  },
  defaultVariants: { appearance: "plain", brand: "none" },
});

type VariantCheckboxProps = CheckboxProps & VariantProps<typeof checkboxVariants>;

export function VariantCheckbox({ appearance, brand, wrapperClassName, ...props }: VariantCheckboxProps) {
  return <Checkbox wrapperClassName={cn(checkboxVariants({ appearance, brand }), wrapperClassName)} {...props} />;
}

type VariantCheckboxesProps = {
  texts: { plain: string; card: string; brand: string };
};

export function VariantCheckboxes({ texts }: VariantCheckboxesProps) {
  return (
    <>
      <VariantCheckbox label={texts.plain} defaultChecked />
      <VariantCheckbox appearance="card" label={texts.card} defaultChecked />
      <VariantCheckbox appearance="card" brand="tertiary" label={texts.brand} defaultChecked />
    </>
  );
}
