import { Switch } from "@gem-org/gem-system";

type DisabledOffSwitchProps = {
  label: string;
};

export function DisabledOffSwitch({ label }: DisabledOffSwitchProps) {
  return <Switch label={label} isDisabled />;
}
