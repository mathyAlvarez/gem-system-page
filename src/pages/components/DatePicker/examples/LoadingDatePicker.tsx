import { DatePicker } from "@gem-org/gem-system";

type LoadingDatePickerProps = { label: string; loadingText: string; helperText: string };

export function LoadingDatePicker({ label, loadingText, helperText }: LoadingDatePickerProps) {
  return <DatePicker label={label} isLoading loadingText={loadingText} helperText={helperText} />;
}
