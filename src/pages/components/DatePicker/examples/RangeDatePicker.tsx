import { DatePicker } from "@gem-org/gem-system";

const today = new Date();
const nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);

type RangeDatePickerProps = { label: string; placeholder: string; helperText: string };

export function RangeDatePicker({ label, placeholder, helperText }: RangeDatePickerProps) {
  return (
    <DatePicker
      label={label}
      range
      placeholder={placeholder}
      helperText={helperText}
      defaultValue={{ start: today, end: nextWeek }}
    />
  );
}
