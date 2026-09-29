import { DatePicker, type DatePickerProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const today = new Date();

const datePickerVariants = cva("", {
  variants: {
    brand: {
      primary: "",
      secondary:
        "[--gem-color-accent:var(--gem-palette-secondary-600)] [--gem-color-primary-500:var(--gem-palette-secondary-500)] [--gem-color-primary-600:var(--gem-palette-secondary-600)]",
      tertiary:
        "[--gem-color-accent:var(--gem-palette-tertiary-600)] [--gem-color-primary-500:var(--gem-palette-tertiary-500)] [--gem-color-primary-600:var(--gem-palette-tertiary-600)]",
    },
    shape: {
      rounded: "",
      square: "[--gem-radius-md:var(--gem-radius-xs)] [--gem-radius-sm:var(--gem-radius-xs)]",
    },
  },
  defaultVariants: { brand: "primary", shape: "rounded" },
});

type VariantDatePickerProps = DatePickerProps & VariantProps<typeof datePickerVariants>;

export function VariantDatePicker({ brand, shape, wrapperClassName, ...props }: VariantDatePickerProps) {
  return <DatePicker wrapperClassName={cn(datePickerVariants({ brand, shape }), wrapperClassName)} {...props} />;
}

export function VariantDatePickers() {
  return (
    <>
      <VariantDatePicker label='brand="primary"' defaultValue={today} />
      <VariantDatePicker brand="secondary" label='brand="secondary"' defaultValue={today} />
      <VariantDatePicker brand="tertiary" shape="square" label='brand="tertiary" shape="square"' defaultValue={today} />
    </>
  );
}
