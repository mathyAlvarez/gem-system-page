import { Slider, type SliderProps } from "@gem-org/gem-system";
import { cn } from "@/lib/cn";

function BrandSlider({ wrapperClassName, ...props }: SliderProps) {
  return (
    <Slider
      wrapperClassName={cn(
        "[--gem-slider-tone:var(--gem-palette-secondary-600)] [--gem-slider-tone-hover:var(--gem-palette-secondary-500)] [--gem-slider-tone-active:var(--gem-palette-secondary-700)]",
        "[--gem-slider-track-h:0.5rem]",
        wrapperClassName,
      )}
      {...props}
    />
  );
}

type TailwindSliderProps = {
  texts: { brand: string; brandHelper: string; merged: string; mergedHelper: string };
};

export function TailwindSlider({ texts }: TailwindSliderProps) {
  return (
    <>
      <BrandSlider label={texts.brand} helperText={texts.brandHelper} defaultValue={45} />
      <BrandSlider
        label={texts.merged}
        helperText={texts.mergedHelper}
        defaultValue={[25, 70]}
        wrapperClassName="[--gem-slider-track-h:0.75rem] [--gem-slider-thumb-size:1.5rem]"
      />
    </>
  );
}
