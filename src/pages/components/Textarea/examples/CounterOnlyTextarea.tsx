import { Textarea } from "@gem-org/gem-system";

type CounterOnlyTextareaProps = { label: string; placeholder: string };

export function CounterOnlyTextarea({ label, placeholder }: CounterOnlyTextareaProps) {
  return <Textarea label={label} placeholder={placeholder} showCount />;
}
