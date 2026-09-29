import { OtpInput } from "@gem-org/gem-system";

type ErrorOtpInputProps = { label: string; errorMessage: string };

export function ErrorOtpInput({ label, errorMessage }: ErrorOtpInputProps) {
  return <OtpInput label={label} defaultValue="000000" isInvalid errorMessage={errorMessage} />;
}
