import { OtpInput } from "@gem-org/gem-system";

type OtpInputLengthsProps = { labels: { four: string; six: string; eight: string } };

export function OtpInputLengths({ labels }: OtpInputLengthsProps) {
  return (
    <>
      <OtpInput length={4} label={labels.four} defaultValue="4829" />
      <OtpInput length={6} label={labels.six} defaultValue="482910" />
      <OtpInput length={8} label={labels.eight} defaultValue="48291076" />
    </>
  );
}
