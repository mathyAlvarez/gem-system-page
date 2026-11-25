import { InputText } from "@gem-org/gem-system";
import { Search } from "@gem-org/gem-system/icons";

type InputTextSizesProps = { labels: { sm: string; md: string; lg: string } };

export function InputTextSizes({ labels }: InputTextSizesProps) {
  return (
    <>
      <InputText size="sm" label={labels.sm} placeholder="sm" prefixIcon={<Search size="sm" />} />
      <InputText size="md" label={labels.md} placeholder="md" prefixIcon={<Search size="sm" />} />
      <InputText size="lg" label={labels.lg} placeholder="lg" prefixIcon={<Search size="sm" />} />
    </>
  );
}
