import { Shine } from "@gem-org/gem-system";
import "./shine-demo.css";

type HoverShineProps = { label: string };

export function HoverShine({ label }: HoverShineProps) {
  return (
    <Shine trigger="hover" radius="lg">
      <button type="button" className="shine-tile shine-tile--button">
        {label}
      </button>
    </Shine>
  );
}
