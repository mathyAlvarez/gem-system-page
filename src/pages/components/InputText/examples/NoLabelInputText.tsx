import { InputText } from "@gem-org/gem-system";
import { Search } from "@gem-org/gem-system/icons";

type NoLabelInputTextProps = { placeholder: string; ariaLabel: string };

export function NoLabelInputText({ placeholder, ariaLabel }: NoLabelInputTextProps) {
  return <InputText placeholder={placeholder} aria-label={ariaLabel} prefixIcon={<Search size="sm" />} />;
}
