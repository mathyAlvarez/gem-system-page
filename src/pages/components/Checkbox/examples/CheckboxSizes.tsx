import { Checkbox } from "@gem-org/gem-system";

type CheckboxSizesProps = {
  labels: { sm: string; md: string; lg: string; rounded: string };
};

export function CheckboxSizes({ labels }: CheckboxSizesProps) {
  return (
    <>
      <Checkbox size="sm" label={labels.sm} defaultChecked />
      <Checkbox size="md" label={labels.md} defaultChecked />
      <Checkbox size="lg" label={labels.lg} defaultChecked />
      <Checkbox size="sm" rounded label={`${labels.sm} · ${labels.rounded}`} defaultChecked />
      <Checkbox size="lg" rounded label={`${labels.lg} · ${labels.rounded}`} defaultChecked />
    </>
  );
}
