import { Glitch } from "@gem-org/gemffects/glitch";
import { GlitchTile } from "./GlitchTile.tsx";
import "./glitch-demo.css";

type AsChildGlitchProps = {
  label: string;
};

export function AsChildGlitch({ label }: AsChildGlitchProps) {
  return (
    <GlitchTile>
      <Glitch variant="rgb" intensity="lg" asChild>
        <h3 className="glitch-demo__copy glitch-demo__host">{label}</h3>
      </Glitch>
    </GlitchTile>
  );
}
