import { InputNumber } from "@gem-org/gem-system";
import { Percent } from "@gem-org/gem-system/icons";

type IconsAdditionInputNumberProps = { label: string; helperText: string };

export function IconsAdditionInputNumber({ label, helperText }: IconsAdditionInputNumberProps) {
  return (
    <InputNumber
      label={label}
      labelPlacement="outline"
      defaultValue={12}
      additionButtons
      prefixIcon={<Percent size="sm" />}
      helperText={helperText}
    />
  );
}
