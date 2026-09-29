import { Slider } from "@gem-org/gem-system";

export function StepSlider({ label, helperText }: { label: string; helperText: string }) {
  return (
    <Slider
      label={label}
      min={16}
      max={30}
      step={0.5}
      defaultValue={21.5}
      formatValue={(value) => `${value}°C`}
      helperText={helperText}
    />
  );
}
