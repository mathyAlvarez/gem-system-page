import { Slider } from "@gem-org/gem-system";

type TooltipSliderProps = {
  label: string;
  infoText: string;
  helperText: string;
};

export function TooltipSlider({ label, infoText, helperText }: TooltipSliderProps) {
  return (
    <Slider
      label={label}
      defaultValue={12}
      max={32}
      suffix="px"
      infoText={infoText}
      helperText={helperText}
    />
  );
}
