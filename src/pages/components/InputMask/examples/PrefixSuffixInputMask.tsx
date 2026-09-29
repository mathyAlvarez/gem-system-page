import { InputMask, Typography } from "@gem-org/gem-system";

type PrefixSuffixInputMaskProps = { label: string; helperText: string };

export function PrefixSuffixInputMask({ label, helperText }: PrefixSuffixInputMaskProps) {
  return (
    <InputMask
      label={label}
      preset="card"
      prefix="#"
      suffix={
        <Typography variant="caption" as="span">
          USD
        </Typography>
      }
      helperText={helperText}
    />
  );
}
