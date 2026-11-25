import { InputPassword } from "@gem-org/gem-system";

type BaseInputPasswordProps = { label: string; placeholder: string; helperText: string };

export function BaseInputPassword({ label, placeholder, helperText }: BaseInputPasswordProps) {
  return <InputPassword label={label} placeholder={placeholder} helperText={helperText} />;
}
