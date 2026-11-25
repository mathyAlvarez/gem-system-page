import { InputPassword } from "@gem-org/gem-system";
import { Lock, Unlock } from "@gem-org/gem-system/icons";

type ToggleIconsInputPasswordProps = { label: string; placeholder: string; helperText: string };

export function ToggleIconsInputPassword({
  label,
  placeholder,
  helperText,
}: ToggleIconsInputPasswordProps) {
  return (
    <InputPassword
      label={label}
      placeholder={placeholder}
      visibleIcon={<Unlock size="sm" />}
      hiddenIcon={<Lock size="sm" />}
      helperText={helperText}
    />
  );
}
