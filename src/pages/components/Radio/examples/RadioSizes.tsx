import { Radio } from "@gem-org/gem-system";

type RadioSizesProps = {
  labels: { sm: string; md: string; lg: string };
};

export function RadioSizes({ labels }: RadioSizesProps) {
  return (
    <>
      <Radio name="radio-size-sm" value="on" size="sm" label={labels.sm} defaultChecked />
      <Radio name="radio-size-md" value="on" size="md" label={labels.md} defaultChecked />
      <Radio name="radio-size-lg" value="on" size="lg" label={labels.lg} defaultChecked />
    </>
  );
}
