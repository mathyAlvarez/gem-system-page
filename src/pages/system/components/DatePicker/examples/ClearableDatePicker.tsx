import { DatePicker } from "@gem-org/gem-system";

type ClearableDatePickerProps = { label: string; helperText: string };

export function ClearableDatePicker({ label, helperText }: ClearableDatePickerProps) {
  return <DatePicker label={label} clearable defaultValue={new Date()} helperText={helperText} />;
}
