import { Slider } from "@gem-org/gem-system";

type PrefixSuffixSliderProps = {
  label: string;
  infoText: string;
  suffix: string;
  helperText: string;
  minAriaLabel: string;
  maxAriaLabel: string;
};

export function PrefixSuffixSlider({
  label,
  infoText,
  suffix,
  helperText,
  minAriaLabel,
  maxAriaLabel,
}: PrefixSuffixSliderProps) {
  return (
    <Slider
      label={label}
      infoText={infoText}
      defaultValue={[5, 10]}
      min={1}
      max={30}
      suffix={suffix}
      helperText={helperText}
      minAriaLabel={minAriaLabel}
      maxAriaLabel={maxAriaLabel}
    />
  );
}
