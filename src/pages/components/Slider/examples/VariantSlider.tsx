import { Slider, type SliderProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const sliderVariants = cva("", {
  variants: {
    brand: {
      primary: "",
      tertiary:
        "[--gem-slider-tone:var(--gem-palette-tertiary-500)] [--gem-slider-tone-hover:var(--gem-palette-tertiary-400)] [--gem-slider-tone-active:var(--gem-palette-tertiary-600)]",
    },
    weight: {
      regular: "",
      bold: "[--gem-slider-track-h:0.625rem] [--gem-slider-thumb-size:1.375rem]",
    },
  },
  defaultVariants: { brand: "primary", weight: "regular" },
});

type VariantSliderProps = SliderProps & VariantProps<typeof sliderVariants>;

export function VariantSlider({ brand, weight, wrapperClassName, ...props }: VariantSliderProps) {
  return <Slider wrapperClassName={cn(sliderVariants({ brand, weight }), wrapperClassName)} {...props} />;
}

export function VariantSliders() {
  return (
    <>
      <VariantSlider label='brand="primary"' defaultValue={40} />
      <VariantSlider brand="tertiary" label='brand="tertiary"' defaultValue={55} />
      <VariantSlider brand="tertiary" weight="bold" label='brand="tertiary" weight="bold"' defaultValue={[30, 80]} />
    </>
  );
}
