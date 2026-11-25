import { GradientText } from "@gem-org/gemffects/gradient-text";
import { TextTile } from "./TextTile.tsx";
import "./gradient-text-demo.css";

type TailwindGradientTextProps = {
  label: string;
};

export function TailwindGradientText({ label }: TailwindGradientTextProps) {
  return (
    <TextTile>
      <GradientText className="[--gemfx-gradient-text-from:var(--gem-palette-success-500)] [--gemfx-gradient-text-via:var(--gem-palette-info-500)] [--gemfx-gradient-text-to:var(--gem-palette-primary-300)] [--gemfx-gradient-text-angle:90deg]">
        <span className="text-[length:var(--gem-font-size-4xl)] font-black uppercase tracking-tight">
          {label}
        </span>
      </GradientText>
    </TextTile>
  );
}
