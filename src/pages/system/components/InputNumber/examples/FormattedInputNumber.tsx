import { InputNumber } from "@gem-org/gem-system";

type FormattedInputNumberProps = { label: string; helperText: string };

export function FormattedInputNumber({ label, helperText }: FormattedInputNumberProps) {
  return (
    <InputNumber
      label={label}
      defaultValue={1299.5}
      precision={2}
      locale="en-US"
      formatOptions={{ style: "currency", currency: "USD" }}
      helperText={helperText}
    />
  );
}
