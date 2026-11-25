import { Glitch } from "@gem-org/gemffects/glitch";
import { GlitchImage, GlitchTile } from "./GlitchTile.tsx";
import "./glitch-demo.css";

type ImageGlitchProps = {
  alt: string;
};

export function ImageGlitch({ alt }: ImageGlitchProps) {
  return (
    <GlitchTile>
      <Glitch className="glitch-demo__host">
        <GlitchImage alt={alt} />
      </Glitch>
    </GlitchTile>
  );
}
