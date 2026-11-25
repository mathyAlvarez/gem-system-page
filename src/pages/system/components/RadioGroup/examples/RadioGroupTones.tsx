import { Radio, RadioGroup, type RadioTone } from "@gem-org/gem-system";

const tones: RadioTone[] = [
  "primary",
  "secondary",
  "success",
  "warning",
  "error",
  "info",
  "neutral",
];

type RadioGroupTonesProps = {
  labels: { a: string; b: string };
};

export function RadioGroupTones({ labels }: RadioGroupTonesProps) {
  return (
    <>
      {tones.map((tone) => (
        <RadioGroup
          key={tone}
          name={`tone-${tone}`}
          tone={tone}
          label={`${tone[0].toUpperCase()}${tone.slice(1)}`}
          orientation="horizontal"
          defaultValue="a"
        >
          <Radio value="a" label={labels.a} />
          <Radio value="b" label={labels.b} />
        </RadioGroup>
      ))}
    </>
  );
}
