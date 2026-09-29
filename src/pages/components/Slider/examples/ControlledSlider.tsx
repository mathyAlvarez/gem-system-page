import { useState } from "react";
import { Slider, Typography } from "@gem-org/gem-system";

export function ControlledSlider({ label, valueLabel }: { label: string; valueLabel: string }) {
  const [value, setValue] = useState(35);

  return (
    <>
      <Slider
        label={label}
        value={value}
        onChange={(next) => {
          if (typeof next === "number") setValue(next);
        }}
      />
      <Typography variant="caption" as="p">
        {valueLabel}: <code>{value}</code>
      </Typography>
    </>
  );
}
