import { InputNumber } from "@gem-org/gem-system";

type InfoInputNumberProps = { label: string; infoText: string; helperText: string };

export function InfoInputNumber({ label, infoText, helperText }: InfoInputNumberProps) {
  return <InputNumber label={label} defaultValue={1} infoText={infoText} helperText={helperText} />;
}
