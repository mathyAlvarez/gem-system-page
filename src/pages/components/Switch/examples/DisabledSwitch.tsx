import { Switch } from "@gem-org/gem-system";

type DisabledSwitchProps = {
  label: string;
  helperText: string;
};

export function DisabledSwitch({ label, helperText }: DisabledSwitchProps) {
  return <Switch label={label} helperText={helperText} isDisabled defaultChecked />;
}
