import { Glitch } from "@gem-org/gemffects/glitch";
import { GlitchTile } from "./GlitchTile.tsx";
import "./glitch-demo.css";

type TailwindGlitchProps = {
  label: string;
};

export function TailwindGlitch({ label }: TailwindGlitchProps) {
  return (
    <GlitchTile>
      <Glitch
        variant="slice"
        intensity="lg"
        className="rounded-full [--gemfx-glitch-red:var(--gem-palette-warning-400)] [--gemfx-glitch-cyan:var(--gem-palette-tertiary-400)]"
        classNames={{ slice: "mix-blend-normal" }}
      >
        <p className="glitch-demo__copy text-[2rem]">{label}</p>
      </Glitch>
    </GlitchTile>
  );
}
