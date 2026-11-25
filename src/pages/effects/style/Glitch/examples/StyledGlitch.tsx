import { Glitch } from "@gem-org/gemffects/glitch";
import { GlitchImage, GlitchTile } from "./GlitchTile.tsx";
import "./glitch-demo.css";
import "./glitch-overrides.css";

type StyledGlitchProps = {
  alt: string;
};

export function StyledGlitch({ alt }: StyledGlitchProps) {
  return (
    <GlitchTile>
      <Glitch variant="noise" intensity="lg" className="glitch-crt">
        <GlitchImage alt={alt} />
      </Glitch>
    </GlitchTile>
  );
}
