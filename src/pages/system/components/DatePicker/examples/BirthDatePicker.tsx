import { DatePicker } from "@gem-org/gem-system";

type BirthDatePickerProps = { label: string; placeholder: string; helperText: string };

export function BirthDatePicker({ label, placeholder, helperText }: BirthDatePickerProps) {
  return (
    <DatePicker
      label={label}
      placeholder={placeholder}
      minDate={new Date(1920, 0, 1)}
      maxDate={new Date()}
      helperText={helperText}
    />
  );
}
