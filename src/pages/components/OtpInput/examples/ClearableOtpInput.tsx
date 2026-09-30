import { useState } from "react";
import { OtpInput } from "@gem-org/gem-system";

type ClearableOtpInputProps = {
  label: string;
  clearLabel: string;
  helperText: string;
  clearedText: string;
};

export function ClearableOtpInput({ label, clearLabel, helperText, clearedText }: ClearableOtpInputProps) {
  const [cleared, setCleared] = useState(false);

  return (
    <OtpInput
      label={label}
      defaultValue="123456"
      clearable
      clearLabel={clearLabel}
      onChange={() => setCleared(false)}
      onClear={() => setCleared(true)}
      helperText={cleared ? clearedText : helperText}
    />
  );
}
