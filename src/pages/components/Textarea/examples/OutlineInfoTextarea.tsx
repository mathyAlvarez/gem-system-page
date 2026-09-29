import { Textarea } from "@gem-org/gem-system";

type OutlineInfoTextareaProps = { label: string; placeholder: string; infoText: string };

export function OutlineInfoTextarea({ label, placeholder, infoText }: OutlineInfoTextareaProps) {
  return (
    <Textarea
      label={label}
      labelPlacement="outline"
      border="outlined"
      placeholder={placeholder}
      infoText={infoText}
    />
  );
}
