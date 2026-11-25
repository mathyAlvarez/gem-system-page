import { Glassmorphism } from "@gem-org/gemffects/glassmorphism";
import { GlassCopy, GlassScene } from "./GlassScene.tsx";
import "./glassmorphism-demo.css";

type TailwindGlassmorphismProps = {
  title: string;
  copy: string;
};

export function TailwindGlassmorphism({ title, copy }: TailwindGlassmorphismProps) {
  return (
    <GlassScene>
      <Glassmorphism
        className="rounded-[var(--gem-radius-2xl)] [--gemfx-glassmorphism-color:var(--gem-palette-secondary-200)]"
        classNames={{ highlight: "opacity-0", surface: "text-center" }}
      >
        <GlassCopy title={title} copy={copy} />
      </Glassmorphism>
    </GlassScene>
  );
}
