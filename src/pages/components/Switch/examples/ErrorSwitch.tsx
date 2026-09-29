import { Switch } from "@gem-org/gem-system";

type ErrorSwitchProps = {
  label: string;
  errorMessage: string;
};

export function ErrorSwitch({ label, errorMessage }: ErrorSwitchProps) {
  return <Switch label={label} errorMessage={errorMessage} isRequired />;
}
