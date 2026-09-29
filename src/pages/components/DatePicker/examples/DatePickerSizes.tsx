import { DatePicker } from "@gem-org/gem-system";

const today = new Date();

type DatePickerSizesProps = { labels: { sm: string; md: string; lg: string } };

export function DatePickerSizes({ labels }: DatePickerSizesProps) {
  return (
    <>
      <DatePicker size="sm" label={labels.sm} defaultValue={today} />
      <DatePicker size="md" label={labels.md} defaultValue={today} />
      <DatePicker size="lg" label={labels.lg} defaultValue={today} />
    </>
  );
}
