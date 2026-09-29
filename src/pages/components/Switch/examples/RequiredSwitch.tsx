import { Switch } from "@gem-org/gem-system";

type RequiredSwitchProps = {
  label: string;
  helperText: string;
};

export function RequiredSwitch({ label, helperText }: RequiredSwitchProps) {
  return <Switch label={label} helperText={helperText} isRequired />;
}
