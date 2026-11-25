import { Radio } from "@gem-org/gem-system";
import "./radio-overrides.css";

type StyledRadiosProps = {
  texts: {
    branded: string;
    brandedHelper: string;
    square: string;
    squareHelper: string;
    combined: string;
    combinedHelper: string;
  };
};

export function StyledRadios({ texts }: StyledRadiosProps) {
  return (
    <>
      <Radio
        name="styled-radio"
        value="branded"
        label={texts.branded}
        helperText={texts.brandedHelper}
        wrapperClassName="radio-branded"
        defaultChecked
      />
      <Radio
        name="styled-radio"
        value="square"
        label={texts.square}
        helperText={texts.squareHelper}
        wrapperClassName="radio-square"
      />
      <Radio
        name="styled-radio"
        value="combined"
        label={texts.combined}
        helperText={texts.combinedHelper}
        tone="success"
        size="lg"
        wrapperClassName="radio-branded"
      />
    </>
  );
}
