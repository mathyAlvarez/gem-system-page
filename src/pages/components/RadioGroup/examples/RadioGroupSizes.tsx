import { Radio, RadioGroup, type RadioSize } from "@gem-org/gem-system";

const sizes: RadioSize[] = ["sm", "md", "lg"];

type RadioGroupSizesProps = {
  labels: Record<RadioSize, string> & { a: string; b: string };
};

export function RadioGroupSizes({ labels }: RadioGroupSizesProps) {
  return (
    <>
      {sizes.map((size) => (
        <RadioGroup key={size} name={`size-${size}`} size={size} label={labels[size]} defaultValue="a">
          <Radio value="a" label={labels.a} />
          <Radio value="b" label={labels.b} />
        </RadioGroup>
      ))}
    </>
  );
}
