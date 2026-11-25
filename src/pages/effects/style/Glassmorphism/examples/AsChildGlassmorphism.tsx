import { Glassmorphism } from "@gem-org/gemffects/glassmorphism";
import { GlassScene } from "./GlassScene.tsx";
import "./glassmorphism-demo.css";

type AsChildGlassmorphismProps = {
  title: string;
  copy: string;
};

export function AsChildGlassmorphism({ title, copy }: AsChildGlassmorphismProps) {
  return (
    <GlassScene>
      <Glassmorphism asChild>
        <article className="glass-demo__target glass-demo__host">
          <p className="glass-demo__title">{title}</p>
          <p className="glass-demo__copy">{copy}</p>
        </article>
      </Glassmorphism>
    </GlassScene>
  );
}
