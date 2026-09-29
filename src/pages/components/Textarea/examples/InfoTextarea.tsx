import { Textarea } from "@gem-org/gem-system";

type InfoTextareaProps = { label: string; placeholder: string; infoText: string; helperText: string };

export function InfoTextarea({ label, placeholder, infoText, helperText }: InfoTextareaProps) {
  return <Textarea label={label} placeholder={placeholder} infoText={infoText} helperText={helperText} />;
}
