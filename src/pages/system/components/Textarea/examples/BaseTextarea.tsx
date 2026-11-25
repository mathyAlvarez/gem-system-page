import { Textarea } from "@gem-org/gem-system";

type BaseTextareaProps = { label: string; placeholder: string; helperText: string };

export function BaseTextarea({ label, placeholder, helperText }: BaseTextareaProps) {
  return <Textarea label={label} placeholder={placeholder} helperText={helperText} />;
}
