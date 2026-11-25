import { useState } from "react";
import { InputText } from "@gem-org/gem-system";

type ClearableInputTextProps = {
  label: string;
  defaultValue: string;
  clearLabel: string;
  helperText: string;
  clearedText: string;
};

export function ClearableInputText({
  label,
  defaultValue,
  clearLabel,
  helperText,
  clearedText,
}: ClearableInputTextProps) {
  const [cleared, setCleared] = useState(false);

  return (
    <InputText
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
