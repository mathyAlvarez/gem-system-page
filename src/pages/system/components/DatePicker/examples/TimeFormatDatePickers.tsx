import { DatePicker } from "@gem-org/gem-system";

const today = new Date();

type TimeFormatDatePickersProps = { h24: string; h12: string };

export function TimeFormatDatePickers({ h24, h12 }: TimeFormatDatePickersProps) {
  return (
    <>
      <DatePicker
        label="YYYY-MM-DD HH:mm"
        showTime
        format="YYYY-MM-DD HH:mm"
        defaultValue={today}
        helperText={h24}
      />
      <DatePicker
        label="DD/MM/YYYY HH:mm"
        showTime
        format="DD/MM/YYYY HH:mm"
        defaultValue={today}
      />
      <DatePicker
        label="MMM D, YYYY h:mm A"
        showTime
        format="MMM D, YYYY h:mm A"
        defaultValue={today}
        helperText={h12}
      />
    </>
  );
}
