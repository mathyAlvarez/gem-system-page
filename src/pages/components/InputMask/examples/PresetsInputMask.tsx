import { INPUT_MASK_PATTERNS, InputMask } from "@gem-org/gem-system";

const presets = ["date", "date-iso", "time", "phone", "card"] as const;

export function PresetsInputMask() {
  return (
    <>
      {presets.map((preset) => (
        <InputMask key={preset} label={preset} preset={preset} helperText={INPUT_MASK_PATTERNS[preset]} />
      ))}
    </>
  );
}
