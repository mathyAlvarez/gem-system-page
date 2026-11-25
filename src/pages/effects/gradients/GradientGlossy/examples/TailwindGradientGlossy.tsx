import { GradientGlossy } from "@gem-org/gemffects/gradient-glossy";
import { GlossyTile } from "./GlossyTile.tsx";
import "./gradient-glossy-demo.css";

type TailwindGradientGlossyProps = {
  label: string;
};

export function TailwindGradientGlossy({ label }: TailwindGradientGlossyProps) {
  return (
    <GlossyTile>
      <GradientGlossy
        variant="deep"
        className="rounded-full text-[color:var(--gem-palette-neutral-950)] [--gemfx-gradient-glossy-color:var(--gem-palette-tertiary-400)]"
      >
        <span className="px-[var(--gem-space-6)] py-[var(--gem-space-2)] font-bold">{label}</span>
      </GradientGlossy>
    </GlossyTile>
  );
}
