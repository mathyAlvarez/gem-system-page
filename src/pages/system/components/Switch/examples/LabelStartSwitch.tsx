import { Switch } from "@gem-org/gem-system";

type LabelStartSwitchProps = {
  label: string;
  helperText: string;
};

export function LabelStartSwitch({ label, helperText }: LabelStartSwitchProps) {
  return <Switch label={label} helperText={helperText} labelPlacement="start" defaultChecked />;
}
