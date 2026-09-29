import { useState } from "react";
import { DatePicker, Typography } from "@gem-org/gem-system";

type ControlledDatePickerProps = { label: string; valueLabel: string };

export function ControlledDatePicker({ label, valueLabel }: ControlledDatePickerProps) {
  const [value, setValue] = useState<Date | null>(new Date());

  return (
    <>
      <DatePicker
        label={label}
        value={value}
        onChange={(next) => setValue(next instanceof Date ? next : null)}
        clearable
      />
      <Typography variant="caption">
        {valueLabel}: <code>{value ? value.toDateString() : "null"}</code>
      </Typography>
    </>
  );
}
