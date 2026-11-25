import { useState } from "react";
import { InputMask } from "@gem-org/gem-system";

type ClearableInputMaskProps = {
  label: string;
  clearLabel: string;
  helperText: string;
  clearedText: string;
};

export function ClearableInputMask({
  label,
  clearLabel,
  helperText,
  clearedText,
}: ClearableInputMaskProps) {
  const [cleared, setCleared] = useState(false);

  return (
    <InputMask
      label={label}
      preset="phone"
      defaultValue="5551234567"
      clearable
      clearLabel={clearLabel}
      onChange={() => setCleared(false)}
      onClear={() => setCleared(true)}
      helperText={cleared ? clearedText : helperText}
    />
  );
}
