import { Switch } from "@gem-org/gem-system";

type SwitchWithoutLabelProps = {
  ariaLabel: string;
};

export function SwitchWithoutLabel({ ariaLabel }: SwitchWithoutLabelProps) {
  return <Switch aria-label={ariaLabel} defaultChecked />;
}
