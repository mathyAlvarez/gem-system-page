import { Textarea } from "@gem-org/gem-system";

type AutosizeTextareaProps = { label: string; helperText: string; defaultValue: string };

export function AutosizeTextarea({ label, helperText, defaultValue }: AutosizeTextareaProps) {
  return (
    <Textarea
      label={label}
      helperText={helperText}
      defaultValue={defaultValue}
      resize="auto"
      minRows={2}
      maxRows={8}
    />
  );
}
