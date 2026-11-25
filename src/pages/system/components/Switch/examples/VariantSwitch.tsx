import { Switch, type SwitchProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const switchVariants = cva("", {
  variants: {
    appearance: {
      plain: "",
      card: "w-full rounded-lg border border-(--gem-color-border) px-4 py-3",
    },
    brand: {
      none: "",
      tertiary:
        "[--gem-switch-tone:var(--gem-palette-tertiary-500)] [--gem-switch-tone-active:var(--gem-palette-tertiary-600)] [--gem-switch-thumb-on:var(--gem-palette-neutral-900)]",
    },
  },
  defaultVariants: { appearance: "plain", brand: "none" },
});

type VariantSwitchProps = SwitchProps & VariantProps<typeof switchVariants>;

export function VariantSwitch({
  appearance,
  brand,
  wrapperClassName,
  ...props
}: VariantSwitchProps) {
  return (
    <Switch
      wrapperClassName={cn(switchVariants({ appearance, brand }), wrapperClassName)}
      {...props}
    />
  );
}

type VariantSwitchesProps = {
  texts: { plain: string; card: string; brand: string };
};

export function VariantSwitches({ texts }: VariantSwitchesProps) {
  return (
    <>
      <VariantSwitch label={texts.plain} />
      <VariantSwitch appearance="card" label={texts.card} />
      <VariantSwitch appearance="card" brand="tertiary" label={texts.brand} defaultChecked />
    </>
  );
}
