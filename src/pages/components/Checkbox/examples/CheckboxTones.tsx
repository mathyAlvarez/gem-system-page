import { Checkbox, type CheckboxTone } from "@gem-org/gem-system";

const tones: CheckboxTone[] = ["primary", "secondary", "success", "warning", "error", "info", "neutral"];

export function CheckboxTones({ rounded = false }: { rounded?: boolean }) {
  return (
    <>
      {tones.map((tone) => (
        <Checkbox
          key={tone}
          tone={tone}
          rounded={rounded}
          label={`${tone[0].toUpperCase()}${tone.slice(1)}`}
          helperText={`tone="${tone}"`}
          defaultChecked
        />
      ))}
    </>
  );
}
