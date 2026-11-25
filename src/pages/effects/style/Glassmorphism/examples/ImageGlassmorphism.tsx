import { Glassmorphism } from "@gem-org/gemffects/glassmorphism";
import { GLASS_SCENE_SRC } from "./demo.ts";
import "./glassmorphism-demo.css";

type ImageGlassmorphismProps = {
  alt: string;
  title: string;
  copy: string;
};

export function ImageGlassmorphism({ alt, title, copy }: ImageGlassmorphismProps) {
  return (
    <div className="glass-demo__frame">
      <img className="glass-demo__image" src={GLASS_SCENE_SRC} alt={alt} />
      <Glassmorphism intensity="sm" className="glass-demo__overlay">
        <div className="glass-demo__caption">
          <strong>{title}</strong>
          <span className="glass-demo__copy">{copy}</span>
        </div>
      </Glassmorphism>
    </div>
  );
}
