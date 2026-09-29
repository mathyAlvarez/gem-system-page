import { Textarea } from "@gem-org/gem-system";

type DisabledTextareaProps = { label: string; defaultValue: string };

export function DisabledTextarea({ label, defaultValue }: DisabledTextareaProps) {
  return <Textarea label={label} defaultValue={defaultValue} isDisabled showCount maxLength={100} />;
}
