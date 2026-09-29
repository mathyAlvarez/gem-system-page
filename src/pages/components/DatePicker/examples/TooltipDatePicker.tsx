import { DatePicker } from "@gem-org/gem-system";

type TooltipDatePickerProps = { label: string; infoText: string };

export function TooltipDatePicker({ label, infoText }: TooltipDatePickerProps) {
  return <DatePicker label={label} infoText={infoText} defaultValue={new Date()} />;
}
