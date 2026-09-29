import { Radio, RadioGroup } from "@gem-org/gem-system";

type HorizontalRadioGroupProps = {
  label: string;
  free: string;
  pro: string;
  team: string;
};

export function HorizontalRadioGroup({ label, free, pro, team }: HorizontalRadioGroupProps) {
  return (
    <RadioGroup name="plan-horizontal" label={label} orientation="horizontal" defaultValue="pro">
      <Radio value="free" label={free} />
      <Radio value="pro" label={pro} />
      <Radio value="team" label={team} />
    </RadioGroup>
  );
}
