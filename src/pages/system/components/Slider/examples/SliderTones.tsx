import { Slider, type SliderTone } from "@gem-org/gem-system";

const tones: SliderTone[] = [
  "primary",
  "secondary",
  "success",
  "warning",
  "error",
  "info",
  "neutral",
];

export function SliderTones() {
  return (
    <>
      {tones.map((tone) => (
        <Slider
          key={tone}
          tone={tone}
          label={`${tone[0].toUpperCase()}${tone.slice(1)}`}
          defaultValue={60}
        />
      ))}
    </>
  );
}
