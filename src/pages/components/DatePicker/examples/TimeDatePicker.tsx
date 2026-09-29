import { DatePicker } from "@gem-org/gem-system";

type TimeDatePickerProps = { label: string; helperText: string };

export function TimeDatePicker({ label, helperText }: TimeDatePickerProps) {
  return <DatePicker label={label} showTime clearable defaultValue={new Date()} helperText={helperText} />;
}
