import { useState } from "react";
import { DatePicker, Typography, type DateRangeValue } from "@gem-org/gem-system";

const today = new Date();
const nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);

const format = (date: Date | null) => (date ? date.toDateString() : "…");

type ControlledRangeDatePickerProps = { label: string; valueLabel: string };

export function ControlledRangeDatePicker({ label, valueLabel }: ControlledRangeDatePickerProps) {
  const [value, setValue] = useState<DateRangeValue>({ start: today, end: nextWeek });

  return (
    <>
      <DatePicker
        label={label}
        range
        value={value}
        onChange={(next) => {
          if (next && !(next instanceof Date)) setValue(next);
        }}
        clearable
      />
      <Typography variant="caption">
        {valueLabel}:{" "}
        <code>
          {format(value.start)} → {format(value.end)}
        </code>
      </Typography>
    </>
  );
}
