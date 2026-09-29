import { OtpInput } from "@gem-org/gem-system";

type OtpInputSizesProps = { labels: { sm: string; md: string; lg: string } };

export function OtpInputSizes({ labels }: OtpInputSizesProps) {
  return (
    <>
      <OtpInput size="sm" length={6} label={labels.sm} defaultValue="482910" />
      <OtpInput size="md" length={6} label={labels.md} defaultValue="482910" />
      <OtpInput size="lg" length={6} label={labels.lg} defaultValue="482910" />
    </>
  );
}
