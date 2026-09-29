import { Slider } from "@gem-org/gem-system";

export function ErrorSlider({ label, errorMessage }: { label: string; errorMessage: string }) {
  return <Slider label={label} defaultValue={10} isRequired errorMessage={errorMessage} />;
}
