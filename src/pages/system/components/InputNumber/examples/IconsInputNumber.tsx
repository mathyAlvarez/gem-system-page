import { InputNumber } from "@gem-org/gem-system";
import { Equals, Percent } from "@gem-org/gem-system/icons";

type IconsInputNumberProps = { label: string; helperText: string };

export function IconsInputNumber({ label, helperText }: IconsInputNumberProps) {
  return (
    <InputNumber
      label={label}
      defaultValue={25}
      showSteppers={false}
      prefixIcon={<Percent size="sm" />}
      suffixIcon={<Equals size="sm" />}
      helperText={helperText}
    />
  );
}
