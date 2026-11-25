import { Glow } from "@gem-org/gemffects/glow";
import { GlowTile } from "./GlowTile.tsx";
import "./glow-demo.css";

type TextGlowProps = {
  text: string;
};

export function TextGlow({ text }: TextGlowProps) {
  return (
    <GlowTile>
      <Glow variant="text" asChild>
        <h4 className="glow-demo__copy">{text}</h4>
      </Glow>
    </GlowTile>
  );
}
