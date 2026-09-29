import { Slider } from "@gem-org/gem-system";

export function WithoutValueSlider({ label }: { label: string }) {
  return <Slider label={label} defaultValue={80} showValue={false} />;
}
