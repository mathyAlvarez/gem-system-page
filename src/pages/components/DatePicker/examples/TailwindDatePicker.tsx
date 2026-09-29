import { DatePicker, type DatePickerProps } from "@gem-org/gem-system";
import { cn } from "@/lib/cn";

const today = new Date();

function BrandDatePicker({ wrapperClassName, ...props }: DatePickerProps) {
  return (
    <DatePicker
      wrapperClassName={cn(
        "[--gem-color-accent:var(--gem-palette-secondary-600)]",
        "[--gem-color-primary-500:var(--gem-palette-secondary-500)] [--gem-color-primary-600:var(--gem-palette-secondary-600)]",
        wrapperClassName,
      )}
      {...props}
    />
  );
}

type TailwindDatePickerProps = {
  texts: { brand: string; brandHelper: string; merged: string; mergedHelper: string };
};

export function TailwindDatePicker({ texts }: TailwindDatePickerProps) {
  return (
    <>
      <BrandDatePicker label={texts.brand} helperText={texts.brandHelper} defaultValue={today} />
      <BrandDatePicker
        label={texts.merged}
        helperText={texts.mergedHelper}
        defaultValue={today}
        wrapperClassName="[--gem-color-accent:var(--gem-palette-tertiary-600)] [--gem-color-primary-600:var(--gem-palette-tertiary-600)]"
      />
    </>
  );
}
