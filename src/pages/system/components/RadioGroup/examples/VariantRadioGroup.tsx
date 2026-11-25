import { Radio, RadioGroup, type RadioGroupProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const radioGroupVariants = cva("", {
  variants: {
    appearance: {
      plain: "",
      card: "rounded-lg border border-(--gem-color-border) px-4 py-3",
    },
    brand: {
      none: "",
      tertiary:
        "[&_.gem-radio]:[--gem-radio-tone:var(--gem-palette-tertiary-500)] [&_.gem-radio]:[--gem-radio-tone-active:var(--gem-palette-tertiary-600)] [&_.gem-radio]:[--gem-radio-on:var(--gem-palette-neutral-900)]",
    },
  },
  defaultVariants: { appearance: "plain", brand: "none" },
});

type VariantRadioGroupProps = RadioGroupProps & VariantProps<typeof radioGroupVariants>;

export function VariantRadioGroup({
  appearance,
  brand,
  wrapperClassName,
  ...props
}: VariantRadioGroupProps) {
  return (
    <RadioGroup
      wrapperClassName={cn(radioGroupVariants({ appearance, brand }), wrapperClassName)}
      {...props}
    />
  );
}

type VariantRadioGroupsProps = {
  texts: { a: string; b: string };
};

const variants = [
  { id: "plain", appearance: "plain", brand: "none" },
  { id: "card", appearance: "card", brand: "none" },
  { id: "brand", appearance: "card", brand: "tertiary" },
] as const;

export function VariantRadioGroups({ texts }: VariantRadioGroupsProps) {
  return (
    <>
      {variants.map(({ id, appearance, brand }) => (
        <VariantRadioGroup
          key={id}
          name={`variant-${id}`}
          label={`appearance="${appearance}"${brand === "none" ? "" : ` brand="${brand}"`}`}
          appearance={appearance}
          brand={brand}
          orientation="horizontal"
          defaultValue="a"
        >
          <Radio value="a" label={texts.a} />
          <Radio value="b" label={texts.b} />
        </VariantRadioGroup>
      ))}
    </>
  );
}
