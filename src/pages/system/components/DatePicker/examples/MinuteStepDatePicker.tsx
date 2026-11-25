import { DatePicker } from "@gem-org/gem-system";

type MinuteStepDatePickerProps = { label: string; helperText: string };

export function MinuteStepDatePicker({ label, helperText }: MinuteStepDatePickerProps) {
  return (
    <DatePicker
      label={label}
      showTime
      minuteStep={15}
      defaultValue={new Date()}
      helperText={helperText}
    />
  );
}
