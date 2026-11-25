import { Select, type SelectOption } from "@gem-org/gem-system";

type TooltipSelectProps = {
  options: readonly SelectOption[];
  texts: { label: string; infoText: string };
};

export function TooltipSelect({ options, texts }: TooltipSelectProps) {
  return (
    <Select
      label={texts.label}
      options={options}
      defaultValue="team"
      infoText={texts.infoText}
      searchable={false}
    />
  );
}
