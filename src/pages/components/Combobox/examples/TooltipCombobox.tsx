import { Combobox } from "@gem-org/gem-system";
import { WORKSPACES } from "./data";

type TooltipComboboxProps = { label: string; infoText: string };

export function TooltipCombobox({ label, infoText }: TooltipComboboxProps) {
  return <Combobox label={label} options={WORKSPACES} defaultValue="team" infoText={infoText} />;
}
