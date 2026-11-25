import { useEffect, useState } from "react";
import { DatePicker } from "@gem-org/gem-system";

type LoadingThenValueDatePickerProps = {
  label: string;
  loadingText: string;
  fetching: string;
  loaded: string;
};

export function LoadingThenValueDatePicker({
  label,
  loadingText,
  fetching,
  loaded,
}: LoadingThenValueDatePickerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState<Date | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setValue(new Date());
      setIsLoading(false);
    }, 2000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <DatePicker
      label={label}
      isLoading={isLoading}
      loadingText={loadingText}
      value={value}
      onChange={(next) => setValue(next instanceof Date ? next : null)}
      clearable
      helperText={isLoading ? fetching : loaded}
    />
  );
}
