import { InputText } from "@gem-org/gem-system";

type UppercaseInputTextProps = { label: string; helperText: string };

export function UppercaseInputText({ label, helperText }: UppercaseInputTextProps) {
  return <InputText label={label} placeholder="abc-123" uppercase helperText={helperText} />;
}
