import { BlurUnveil } from "@gem-org/gemffects/blur-unveil";
import { UnveilImage, UnveilTile } from "./UnveilTile.tsx";
import "./blur-unveil-demo.css";
import "./blur-unveil-overrides.css";

type StyledBlurUnveilProps = {
  alt: string;
  hint: string;
};

export function StyledBlurUnveil({ alt, hint }: StyledBlurUnveilProps) {
  return (
    <UnveilTile>
      <BlurUnveil trigger="click" intensity="lg" className="unveil-spoiler" data-hint={hint}>
        <UnveilImage alt={alt} />
      </BlurUnveil>
    </UnveilTile>
  );
}
