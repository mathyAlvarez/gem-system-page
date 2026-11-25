import { Textarea } from "@gem-org/gem-system";

type ErrorTextareaProps = { label: string; defaultValue: string; errorMessage: string };

export function ErrorTextarea({ label, defaultValue, errorMessage }: ErrorTextareaProps) {
  return (
    <Textarea
      label={label}
      defaultValue={defaultValue}
      errorMessage={errorMessage}
      isInvalid
      showCount
      maxLength={200}
    />
  );
}
