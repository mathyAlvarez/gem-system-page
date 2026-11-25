import { InputPassword } from "@gem-org/gem-system";
import { Lock } from "@gem-org/gem-system/icons";

type InputPasswordSizesProps = { labels: { sm: string; md: string; lg: string } };

export function InputPasswordSizes({ labels }: InputPasswordSizesProps) {
  return (
    <>
      <InputPassword size="sm" label={labels.sm} prefixIcon={<Lock size="sm" />} />
      <InputPassword size="md" label={labels.md} prefixIcon={<Lock size="sm" />} />
      <InputPassword size="lg" label={labels.lg} prefixIcon={<Lock size="sm" />} />
    </>
  );
}
