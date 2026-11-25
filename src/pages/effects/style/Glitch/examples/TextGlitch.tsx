import { Glitch } from "@gem-org/gemffects/glitch";
import { GlitchTile } from "./GlitchTile.tsx";
import "./glitch-demo.css";

type TextGlitchProps = {
  label: string;
};

export function TextGlitch({ label }: TextGlitchProps) {
  return (
    <GlitchTile>
      <Glitch intensity="lg" className="glitch-demo__host">
        <p className="glitch-demo__copy">{label}</p>
      </Glitch>
    </GlitchTile>
  );
}
