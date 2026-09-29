import { Select, type SelectOption } from "@gem-org/gem-system";

type DisabledSelectProps = {
  options: readonly SelectOption[];
  texts: { label: string; helperText: string };
};

export function DisabledSelect({ options, texts }: DisabledSelectProps) {
  return <Select label={texts.label} options={options} isDisabled defaultValue="es" helperText={texts.helperText} />;
}
