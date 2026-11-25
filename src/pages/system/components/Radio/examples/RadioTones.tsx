import { Radio, type RadioTone } from "@gem-org/gem-system";

const tones: RadioTone[] = [
  "primary",
  "secondary",
  "success",
  "warning",
  "error",
  "info",
  "neutral",
];

export function RadioTones() {
  return (
    <>
      {tones.map((tone) => (
        <Radio
          key={tone}
          name={`radio-tone-${tone}`}
          value="on"
          tone={tone}
          label={`${tone[0].toUpperCase()}${tone.slice(1)}`}
          helperText={`tone="${tone}"`}
          defaultChecked
        />
      ))}
    </>
  );
}
