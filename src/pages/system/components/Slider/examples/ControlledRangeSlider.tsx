import { useState } from "react";
import { Slider, Typography } from "@gem-org/gem-system";

type ControlledRangeSliderProps = {
  label: string;
  rangeLabel: string;
  minAriaLabel: string;
  maxAriaLabel: string;
};

export function ControlledRangeSlider({
  label,
  rangeLabel,
  minAriaLabel,
  maxAriaLabel,
}: ControlledRangeSliderProps) {
  const [value, setValue] = useState<[number, number]>([15, 60]);

  return (
    <>
      <Slider
        label={label}
        value={value}
        onChange={(next) => {
          if (Array.isArray(next)) setValue(next);
        }}
        minAriaLabel={minAriaLabel}
        maxAriaLabel={maxAriaLabel}
      />
      <Typography variant="caption" as="p">
        {rangeLabel}:{" "}
        <code>
          {value[0]} – {value[1]}
        </code>
      </Typography>
    </>
  );
}
