import { Shine } from "@gem-org/gem-system";
import "./shine-demo.css";

type TailwindShineProps = { label: string };

export function TailwindShine({ label }: TailwindShineProps) {
  return (
    <Shine
      className="rounded-(--gem-radius-lg) shadow-lg [--gem-shine-color:var(--gem-palette-tertiary-100)] [--gem-shine-strength:70%]"
      classNames={{ gleam: "mix-blend-overlay" }}
    >
      <span className="shine-tile">{label}</span>
    </Shine>
  );
}
