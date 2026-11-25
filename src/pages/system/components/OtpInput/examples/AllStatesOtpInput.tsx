import { OtpInput } from "@gem-org/gem-system";

type AllStatesOtpInputProps = {
  texts: {
    base: { label: string; helperText: string };
    filled: { label: string; helperText: string };
    error: { label: string; errorMessage: string };
    disabled: { label: string };
  };
};

export function AllStatesOtpInput({ texts }: AllStatesOtpInputProps) {
  return (
    <>
      <OtpInput label={texts.base.label} helperText={texts.base.helperText} />
      <OtpInput
        label={texts.filled.label}
        defaultValue="482910"
        helperText={texts.filled.helperText}
      />
      <OtpInput
        label={texts.error.label}
        defaultValue="000000"
        isInvalid
        errorMessage={texts.error.errorMessage}
      />
      <OtpInput label={texts.disabled.label} defaultValue="123456" isDisabled />
    </>
  );
}
