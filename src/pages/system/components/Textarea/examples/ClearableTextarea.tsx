import { useState } from "react";
import { Textarea } from "@gem-org/gem-system";

type ClearableTextareaProps = {
  label: string;
  defaultValue: string;
  clearLabel: string;
  helperText: string;
  clearedText: string;
};

export function ClearableTextarea({
  label,
  defaultValue,
  clearLabel,
  helperText,
  clearedText,
}: ClearableTextareaProps) {
  const [cleared, setCleared] = useState(false);

  return (
    <Textarea
      label={label}
      defaultValue={defaultValue}
      clearable
      clearLabel={clearLabel}
      onChange={() => setCleared(false)}
      onClear={() => setCleared(true)}
      helperText={cleared ? clearedText : helperText}
    />
  );
}
