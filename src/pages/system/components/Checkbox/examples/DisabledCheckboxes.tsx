import { Checkbox } from "@gem-org/gem-system";

type DisabledCheckboxesProps = {
  checkedLabel: string;
  uncheckedLabel: string;
  helperText: string;
};

export function DisabledCheckboxes({
  checkedLabel,
  uncheckedLabel,
  helperText,
}: DisabledCheckboxesProps) {
  return (
    <>
      <Checkbox label={checkedLabel} helperText={helperText} isDisabled defaultChecked />
      <Checkbox label={uncheckedLabel} isDisabled />
    </>
  );
}
