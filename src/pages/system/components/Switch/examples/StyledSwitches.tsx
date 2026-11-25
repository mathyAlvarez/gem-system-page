import { Switch } from "@gem-org/gem-system";
import "./switch-overrides.css";

type StyledSwitchesProps = {
  texts: {
    branded: string;
    brandedHelper: string;
    square: string;
    squareHelper: string;
    combined: string;
    combinedHelper: string;
  };
};

export function StyledSwitches({ texts }: StyledSwitchesProps) {
  return (
    <>
      <Switch
        label={texts.branded}
        helperText={texts.brandedHelper}
        wrapperClassName="switch-branded"
        defaultChecked
      />
      <Switch
        label={texts.square}
        helperText={texts.squareHelper}
        wrapperClassName="switch-square"
        defaultChecked
      />
      <Switch
        label={texts.combined}
        helperText={texts.combinedHelper}
        tone="success"
        size="lg"
        wrapperClassName="switch-branded"
      />
    </>
  );
}
