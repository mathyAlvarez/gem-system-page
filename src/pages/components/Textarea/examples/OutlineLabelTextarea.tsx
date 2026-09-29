import { Textarea } from "@gem-org/gem-system";

type OutlineLabelTextareaProps = { label: string; placeholder: string };

export function OutlineLabelTextarea({ label, placeholder }: OutlineLabelTextareaProps) {
  return <Textarea label={label} labelPlacement="outline" placeholder={placeholder} />;
}
