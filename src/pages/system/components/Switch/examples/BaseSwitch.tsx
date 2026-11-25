import { Switch } from "@gem-org/gem-system";

type BaseSwitchProps = {
  label: string;
  helperText: string;
};

export function BaseSwitch({ label, helperText }: BaseSwitchProps) {
  return <Switch label={label} helperText={helperText} />;
}
