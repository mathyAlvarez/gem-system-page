import { Glitch } from "@gem-org/gemffects/glitch";
import { GlitchImage, GlitchTile } from "./GlitchTile.tsx";
import "./glitch-demo.css";

const pairs = [
  {
    name: "tertiary · primary",
    color: "var(--gem-palette-tertiary-400)",
    colorAlt: "var(--gem-palette-primary-400)",
  },
  {
    name: "error · warning",
    color: "var(--gem-palette-error-400)",
    colorAlt: "var(--gem-palette-warning-400)",
  },
];

export function ColorGlitch() {
  return (
    <div className="glitch-demo">
      {pairs.map(({ name, color, colorAlt }) => (
        <GlitchTile key={name} label={name}>
          <Glitch
            variant="slice"
            intensity="lg"
            color={color}
            colorAlt={colorAlt}
            className="glitch-demo__host"
          >
            <GlitchImage compact />
          </Glitch>
        </GlitchTile>
      ))}
    </div>
  );
}
