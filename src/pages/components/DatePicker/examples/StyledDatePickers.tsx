import { DatePicker } from "@gem-org/gem-system";
import "./datepicker-overrides.css";

const today = new Date();
const nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);

type StyledDatePickersProps = {
  texts: { pill: string; pillHelper: string; range: string; rangeHelper: string };
};

export function StyledDatePickers({ texts }: StyledDatePickersProps) {
  return (
    <>
      <DatePicker
        label={texts.pill}
        helperText={texts.pillHelper}
        defaultValue={today}
        wrapperClassName="datepicker-pill"
      />
      <DatePicker
        label={texts.range}
        helperText={texts.rangeHelper}
        range
        defaultValue={{ start: today, end: nextWeek }}
        wrapperClassName="datepicker-pill"
      />
    </>
  );
}
