import { InputNumber } from "@gem-org/gem-system";
import { Divide, Multiply } from "@gem-org/gem-system/icons";

type IconsSteppersInputNumberProps = { label: string; helperText: string };

export function IconsSteppersInputNumber({ label, helperText }: IconsSteppersInputNumberProps) {
  return (
    <InputNumber
      label={label}
      defaultValue={100}
      prefixIcon={<Multiply size="sm" />}
      suffixIcon={<Divide size="sm" />}
      helperText={helperText}
    />
  );
}
