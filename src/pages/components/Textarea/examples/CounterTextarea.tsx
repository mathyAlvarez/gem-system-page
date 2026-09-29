import { Textarea } from "@gem-org/gem-system";

type CounterTextareaProps = { label: string; helperText: string; defaultValue: string };

export function CounterTextarea({ label, helperText, defaultValue }: CounterTextareaProps) {
  return <Textarea label={label} helperText={helperText} defaultValue={defaultValue} showCount maxLength={120} />;
}
