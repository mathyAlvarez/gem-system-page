import { useState } from "react";
import { Radio, RadioGroup, Typography } from "@gem-org/gem-system";

type ControlledRadioGroupProps = {
  label: string;
  free: string;
  pro: string;
  enterprise: string;
  selected: string;
};

export function ControlledRadioGroup({
  label,
  free,
  pro,
  enterprise,
  selected,
}: ControlledRadioGroupProps) {
  const [value, setValue] = useState("pro");

  return (
    <>
      <RadioGroup
        name="subscription-controlled"
        label={label}
        value={value}
        onChange={(next) => setValue(next)}
      >
        <Radio value="free" label={free} />
        <Radio value="pro" label={pro} />
        <Radio value="enterprise" label={enterprise} />
      </RadioGroup>
      <Typography variant="caption" as="p">
        {selected}: <code>{value}</code>
      </Typography>
    </>
  );
}
