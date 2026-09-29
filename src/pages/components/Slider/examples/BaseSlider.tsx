import { Slider } from "@gem-org/gem-system";

export function BaseSlider({ label, helperText }: { label: string; helperText: string }) {
  return <Slider label={label} defaultValue={40} helperText={helperText} />;
}
