import { BlurUnveil } from "@gem-org/gemffects/blur-unveil";
import { UnveilImage, UnveilTile } from "./UnveilTile.tsx";
import "./blur-unveil-demo.css";

type TailwindBlurUnveilProps = {
  alt: string;
};

export function TailwindBlurUnveil({ alt }: TailwindBlurUnveilProps) {
  return (
    <UnveilTile>
      <BlurUnveil
        trigger="hover"
        className="rounded-[var(--gem-radius-xl)] shadow-[0_0_0_1px_var(--gem-palette-neutral-700)] [&.gemfx-blur-unveil--on]:shadow-[0_0_0_2px_var(--gem-palette-primary-400)]"
      >
        <UnveilImage alt={alt} />
      </BlurUnveil>
    </UnveilTile>
  );
}
