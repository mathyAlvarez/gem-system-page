import { useState } from "react";
import { InputNumber } from "@gem-org/gem-system";

type ClearableInputNumberProps = {
  label: string;
  clearLabel: string;
  valueText: string;
  emptyText: string;
};

export function ClearableInputNumber({ label, clearLabel, valueText, emptyText }: ClearableInputNumberProps) {
  const [value, setValue] = useState<number | null>(12);

  return (
    <InputNumber
      label={label}
      value={value}
      onChange={setValue}
      clearable
      clearLabel={clearLabel}
      helperText={value === null ? emptyText : `${valueText}: ${value}`}
    />
  );
}
