import { DatePicker } from "@gem-org/gem-system";

const today = new Date();
const nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);

type TimeRangeDatePickerProps = { label: string; helperText: string };

export function TimeRangeDatePicker({ label, helperText }: TimeRangeDatePickerProps) {
  return (
    <DatePicker
      label={label}
      range
      showTime
      defaultValue={{ start: today, end: nextWeek }}
      helperText={helperText}
    />
  );
}
