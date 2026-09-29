import { DatePicker } from "@gem-org/gem-system";

type BaseDatePickerProps = { label: string; placeholder: string; helperText: string };

export function BaseDatePicker({ label, placeholder, helperText }: BaseDatePickerProps) {
  return <DatePicker label={label} placeholder={placeholder} helperText={helperText} />;
}
