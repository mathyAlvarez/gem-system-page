import { Combobox } from "@gem-org/gem-system";
import { COUNTRIES } from "./data";
import "./combobox-overrides.css";

type StyledComboboxesProps = {
  texts: { branded: string; brandedHelper: string; pill: string; pillHelper: string };
};

export function StyledComboboxes({ texts }: StyledComboboxesProps) {
  return (
    <>
      <Combobox
        label={texts.branded}
        helperText={texts.brandedHelper}
        options={COUNTRIES}
        multiple
        defaultValue={["ar", "uy"]}
        wrapperClassName="combobox-branded"
      />
      <Combobox
        label={texts.pill}
        helperText={texts.pillHelper}
        options={COUNTRIES}
        defaultValue="mx"
        wrapperClassName="combobox-pill"
      />
    </>
  );
}
