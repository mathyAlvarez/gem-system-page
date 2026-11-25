import { useState } from "react";
import { InputText, Typography } from "@gem-org/gem-system";
import { Mail } from "@gem-org/gem-system/icons";

type ValidRegexInputTextProps = {
  label: string;
  placeholder: string;
  helperText: string;
  validLabel: string;
  invalidLabel: string;
};

export function ValidRegexInputText({
  label,
  placeholder,
  helperText,
  validLabel,
  invalidLabel,
}: ValidRegexInputTextProps) {
  const [isValid, setIsValid] = useState(true);

  return (
    <>
      <InputText
        label={label}
        type="email"
        placeholder={placeholder}
        validRegex="^[^\s@]+@[^\s@]+\.[^\s@]+$"
        helperText={helperText}
        prefixIcon={<Mail size="sm" />}
        onValidate={(valid) => setIsValid(valid)}
      />
      <Typography variant="caption" as="p">
        onValidate: {isValid ? validLabel : invalidLabel}
      </Typography>
    </>
  );
}
