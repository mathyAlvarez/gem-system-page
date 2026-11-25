import { Glassmorphism } from "@gem-org/gemffects/glassmorphism";
import { GlassCopy, GlassScene } from "./GlassScene.tsx";
import "./glassmorphism-demo.css";
import "./glassmorphism-overrides.css";

type StyledGlassmorphismProps = {
  title: string;
  copy: string;
};

export function StyledGlassmorphism({ title, copy }: StyledGlassmorphismProps) {
  return (
    <GlassScene>
      <Glassmorphism variant="clear" className="glass-aurora">
        <GlassCopy title={title} copy={copy} />
      </Glassmorphism>
    </GlassScene>
  );
}
