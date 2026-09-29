import { useState } from "react";
import { Switch, Typography } from "@gem-org/gem-system";

type ControlledSwitchProps = {
  label: string;
  state: string;
  on: string;
  off: string;
};

export function ControlledSwitch({ label, state, on, off }: ControlledSwitchProps) {
  const [checked, setChecked] = useState(true);

  return (
    <>
      <Switch label={label} checked={checked} onChange={(event) => setChecked(event.target.checked)} />
      <Typography variant="caption" as="p">
        {state}: <code>{checked ? on : off}</code>
      </Typography>
    </>
  );
}
