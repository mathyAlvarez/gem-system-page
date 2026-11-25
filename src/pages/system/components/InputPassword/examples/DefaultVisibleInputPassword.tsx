import { InputPassword } from "@gem-org/gem-system";

type DefaultVisibleInputPasswordProps = { label: string; helperText: string };

export function DefaultVisibleInputPassword({
  label,
  helperText,
}: DefaultVisibleInputPasswordProps) {
  return (
    <InputPassword label={label} defaultVisible defaultValue="opensesame" helperText={helperText} />
  );
}
