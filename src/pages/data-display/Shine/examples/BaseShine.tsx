import { Shine } from "@gem-org/gem-system";
import "./shine-demo.css";

type BaseShineProps = { label: string };

export function BaseShine({ label }: BaseShineProps) {
  return (
    <Shine>
      <span className="shine-tile">{label}</span>
    </Shine>
  );
}
