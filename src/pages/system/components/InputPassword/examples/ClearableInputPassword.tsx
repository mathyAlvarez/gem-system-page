import { useState } from "react";
import { InputPassword } from "@gem-org/gem-system";
import { CheckCircle, Lock } from "@gem-org/gem-system/icons";

type ClearableInputPasswordProps = {
  label: string;
  suffixLabel: string;
  defaultValue: string;
  clearLabel: string;
  helperText: string;
  clearedText: string;
};

export function ClearableInputPassword({
  label,
  suffixLabel,
  defaultValue,
  clearLabel,
  helperText,
  clearedText,
}: ClearableInputPasswordProps) {
  const [cleared, setCleared] = useState(false);

  return (
    <>
      <InputPassword
        label={label}
        defaultValue={defaultValue}
        prefixIcon={<Lock size="sm" />}
        clearable
        clearLabel={clearLabel}
        onChange={() => setCleared(false)}
        onClear={() => setCleared(true)}
        helperText={cleared ? clearedText : helperText}
      />
      <InputPassword
        label={suffixLabel}
        defaultValue={defaultValue}
        suffixIcon={<CheckCircle size="sm" />}
        clearable
        clearLabel={clearLabel}
      />
    </>
  );
}
