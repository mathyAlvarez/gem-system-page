import { Slider } from "@gem-org/gem-system";

type RangeSliderProps = {
  label: string;
  helperText: string;
  minAriaLabel: string;
  maxAriaLabel: string;
};

export function RangeSlider({ label, helperText, minAriaLabel, maxAriaLabel }: RangeSliderProps) {
  return (
    <Slider
      label={label}
      defaultValue={[20, 75]}
      prefix="$"
      helperText={helperText}
      minAriaLabel={minAriaLabel}
      maxAriaLabel={maxAriaLabel}
    />
  );
}
