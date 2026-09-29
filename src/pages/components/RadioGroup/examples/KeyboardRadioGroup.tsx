import { Radio, RadioGroup } from "@gem-org/gem-system";

type KeyboardRadioGroupProps = {
  label: string;
  helperText: string;
  light: string;
  dark: string;
  system: string;
};

export function KeyboardRadioGroup({ label, helperText, light, dark, system }: KeyboardRadioGroupProps) {
  return (
    <RadioGroup name="theme-keyboard" label={label} helperText={helperText} defaultValue="system">
      <Radio value="light" label={light} />
      <Radio value="dark" label={dark} />
      <Radio value="system" label={system} />
    </RadioGroup>
  );
}
