import { Glassmorphism } from "@gem-org/gemffects/glassmorphism";
import { GlassCopy, GlassScene } from "./GlassScene.tsx";
import "./glassmorphism-demo.css";

type CardGlassmorphismProps = {
  title: string;
  copy: string;
};

export function CardGlassmorphism({ title, copy }: CardGlassmorphismProps) {
  return (
    <GlassScene>
      <Glassmorphism className="glass-demo__host">
        <GlassCopy title={title} copy={copy} />
      </Glassmorphism>
    </GlassScene>
  );
}
