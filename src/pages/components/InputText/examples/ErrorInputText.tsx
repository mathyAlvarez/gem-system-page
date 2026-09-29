import { InputText } from "@gem-org/gem-system";
import { AlertCircle, Mail } from "@gem-org/gem-system/icons";

type ErrorInputTextProps = { label: string; defaultValue: string; errorMessage: string };

export function ErrorInputText({ label, defaultValue, errorMessage }: ErrorInputTextProps) {
  return (
    <InputText
      label={label}
      type="email"
      defaultValue={defaultValue}
      isInvalid
      errorMessage={errorMessage}
      prefixIcon={<Mail size="sm" />}
      suffixIcon={<AlertCircle size="sm" />}
    />
  );
}
