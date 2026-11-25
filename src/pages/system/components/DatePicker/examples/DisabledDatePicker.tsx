import { DatePicker } from "@gem-org/gem-system";

type DisabledDatePickerProps = { label: string; helperText: string };

export function DisabledDatePicker({ label, helperText }: DisabledDatePickerProps) {
  return <DatePicker label={label} isDisabled defaultValue={new Date()} helperText={helperText} />;
}
