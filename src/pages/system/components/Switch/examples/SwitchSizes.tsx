import { Switch, type SwitchSize } from "@gem-org/gem-system";

const sizes: SwitchSize[] = ["sm", "md", "lg"];

type SwitchSizesProps = {
  labels: Record<SwitchSize, string>;
};

export function SwitchSizes({ labels }: SwitchSizesProps) {
  return (
    <>
      {sizes.map((size) => (
        <Switch key={size} size={size} label={labels[size]} defaultChecked />
      ))}
    </>
  );
}
