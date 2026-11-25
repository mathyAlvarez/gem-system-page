import { Slider } from "@gem-org/gem-system";

type SliderSizesProps = {
  labels: { sm: string; md: string; lg: string };
};

export function SliderSizes({ labels }: SliderSizesProps) {
  return (
    <>
      <Slider size="sm" label={labels.sm} defaultValue={30} />
      <Slider size="md" label={labels.md} defaultValue={50} />
      <Slider size="lg" label={labels.lg} defaultValue={70} />
    </>
  );
}
