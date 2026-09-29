import { DatePicker } from "@gem-org/gem-system";

const today = new Date();
const nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);

const formats = ["YYYY-MM-DD", "DD/MM/YYYY", "MM/DD/YYYY", "D MMM YYYY", "MMMM D, YYYY", "YYYY"];

type FormatDatePickersProps = { rangeLabel: string; rangeHelper: string };

export function FormatDatePickers({ rangeLabel, rangeHelper }: FormatDatePickersProps) {
  return (
    <>
      {formats.map((format) => (
        <DatePicker
          key={format}
          label={format}
          format={format}
          defaultValue={today}
          helperText={`format="${format}"`}
        />
      ))}
      <DatePicker
        label={rangeLabel}
        range
        format="DD MMM YYYY"
        defaultValue={{ start: today, end: nextWeek }}
        helperText={rangeHelper}
      />
    </>
  );
}
