import { Textarea } from "@gem-org/gem-system";

type NoResizeTextareaProps = { label: string; helperText: string };

export function NoResizeTextarea({ label, helperText }: NoResizeTextareaProps) {
  return <Textarea label={label} helperText={helperText} resize="none" minRows={4} />;
}
