import { Radio, type RadioProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const radioVariants = cva("", {
  variants: {
    appearance: {
      plain: "",
      card: "rounded-lg border border-(--gem-color-border) px-4 py-3",
    },
    brand: {
      none: "",
      tertiary:
        "[--gem-radio-tone:var(--gem-palette-tertiary-500)] [--gem-radio-tone-active:var(--gem-palette-tertiary-600)] [--gem-radio-on:var(--gem-palette-neutral-900)]",
    },
  },
  defaultVariants: { appearance: "plain", brand: "none" },
});

type VariantRadioProps = RadioProps & VariantProps<typeof radioVariants>;

export function VariantRadio({ appearance, brand, wrapperClassName, ...props }: VariantRadioProps) {
  return (
    <Radio
      wrapperClassName={cn(radioVariants({ appearance, brand }), wrapperClassName)}
      {...props}
    />
  );
}

type VariantRadiosProps = {
  texts: { plain: string; card: string; brand: string };
};

export function VariantRadios({ texts }: VariantRadiosProps) {
  return (
    <>
      <VariantRadio name="variant-radio" value="plain" label={texts.plain} />
      <VariantRadio name="variant-radio" value="card" appearance="card" label={texts.card} />
      <VariantRadio
        name="variant-radio"
        value="brand"
        appearance="card"
        brand="tertiary"
        label={texts.brand}
        defaultChecked
      />
    </>
  );
}
