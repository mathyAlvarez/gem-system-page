import { Slider } from "@gem-org/gem-system";

export function DisabledSlider({ label, helperText }: { label: string; helperText: string }) {
  return <Slider label={label} defaultValue={55} isDisabled helperText={helperText} />;
}
