import { Checkbox } from "@gem-org/gem-system";
import "./checkbox-overrides.css";

type StyledCheckboxesProps = {
  texts: {
    branded: string;
    brandedHelper: string;
    pill: string;
    pillHelper: string;
    combined: string;
    combinedHelper: string;
  };
};

export function StyledCheckboxes({ texts }: StyledCheckboxesProps) {
  return (
    <>
      <Checkbox
        label={texts.branded}
        helperText={texts.brandedHelper}
        wrapperClassName="checkbox-branded"
        defaultChecked
      />
      <Checkbox
        label={texts.pill}
        helperText={texts.pillHelper}
        wrapperClassName="checkbox-pill"
        defaultChecked
      />
      <Checkbox
        label={texts.combined}
        helperText={texts.combinedHelper}
        tone="success"
        rounded
        size="lg"
        wrapperClassName="checkbox-branded"
        defaultChecked
      />
    </>
  );
}
