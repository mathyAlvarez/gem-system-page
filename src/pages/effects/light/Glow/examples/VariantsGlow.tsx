import { Glow, type GlowVariant } from "@gem-org/gemffects/glow";
import { GlowTile } from "./GlowTile.tsx";
import "./glow-demo.css";

const variants: { variant: GlowVariant; bare: boolean }[] = [
  { variant: "halo", bare: false },
  { variant: "outline", bare: true },
  { variant: "inner", bare: true },
  { variant: "pulse", bare: false },
];

export function VariantsGlow() {
  return (
    <div className="glow-demo">
      {variants.map(({ variant, bare }) => (
        <GlowTile key={variant} label={variant}>
          <Glow variant={variant} className="glow-demo__host">
            <span
              className={bare ? "glow-demo__target glow-demo__target--bare" : "glow-demo__target"}
            >
              {variant}
            </span>
          </Glow>
        </GlowTile>
      ))}
    </div>
  );
}
