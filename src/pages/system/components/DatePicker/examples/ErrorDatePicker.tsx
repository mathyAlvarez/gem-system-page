import { DatePicker } from "@gem-org/gem-system";

type ErrorDatePickerProps = { label: string; errorMessage: string };

export function ErrorDatePicker({ label, errorMessage }: ErrorDatePickerProps) {
  return <DatePicker label={label} isRequired errorMessage={errorMessage} />;
}
