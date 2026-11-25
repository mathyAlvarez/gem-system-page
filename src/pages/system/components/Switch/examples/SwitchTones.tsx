import { Switch, type SwitchTone } from "@gem-org/gem-system";

const tones: SwitchTone[] = [
  "primary",
  "secondary",
  "success",
  "warning",
  "error",
  "info",
  "neutral",
];

export function SwitchTones() {
  return (
    <>
      {tones.map((tone) => (
        <Switch
          key={tone}
          tone={tone}
          label={`${tone[0].toUpperCase()}${tone.slice(1)}`}
          helperText={`tone="${tone}"`}
          defaultChecked
        />
      ))}
    </>
  );
}
