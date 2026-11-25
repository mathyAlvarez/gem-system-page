import { InputPassword } from "@gem-org/gem-system";

type InfoInputPasswordProps = {
  label: string;
  placeholder: string;
  infoText: string;
  helperText: string;
};

export function InfoInputPassword({
  label,
  placeholder,
  infoText,
  helperText,
}: InfoInputPasswordProps) {
  return (
    <InputPassword
      label={label}
      placeholder={placeholder}
      infoText={infoText}
      helperText={helperText}
    />
  );
}
