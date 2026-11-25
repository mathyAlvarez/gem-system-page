import { InputNumber } from "@gem-org/gem-system";

type InputNumberSizesProps = { labels: { sm: string; md: string; lg: string } };

export function InputNumberSizes({ labels }: InputNumberSizesProps) {
  return (
    <>
      <InputNumber size="sm" label={labels.sm} defaultValue={1} />
      <InputNumber size="md" label={labels.md} defaultValue={2} />
      <InputNumber size="lg" label={labels.lg} defaultValue={3} />
    </>
  );
}
