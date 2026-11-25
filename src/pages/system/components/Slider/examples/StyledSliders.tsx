import { Slider } from "@gem-org/gem-system";
import "./slider-overrides.css";

type StyledSlidersProps = {
  texts: { branded: string; brandedHelper: string; square: string; squareHelper: string };
};

export function StyledSliders({ texts }: StyledSlidersProps) {
  return (
    <>
      <Slider
        label={texts.branded}
        helperText={texts.brandedHelper}
        defaultValue={65}
        wrapperClassName="slider-branded"
      />
      <Slider
        label={texts.square}
        helperText={texts.squareHelper}
        defaultValue={[20, 60]}
        suffix="%"
        wrapperClassName="slider-square"
      />
    </>
  );
}
