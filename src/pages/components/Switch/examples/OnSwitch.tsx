import { Switch } from "@gem-org/gem-system";

type OnSwitchProps = {
  label: string;
};

export function OnSwitch({ label }: OnSwitchProps) {
  return <Switch label={label} defaultChecked />;
}
