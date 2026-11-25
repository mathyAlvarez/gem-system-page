import { DatePicker } from "@gem-org/gem-system";

const today = new Date();
const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());

type MinMaxDatePickerProps = { label: string; helperText: string };

export function MinMaxDatePicker({ label, helperText }: MinMaxDatePickerProps) {
  return <DatePicker label={label} minDate={today} maxDate={nextMonth} helperText={helperText} />;
}
