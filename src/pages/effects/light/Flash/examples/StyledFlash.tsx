import { Flash } from "@gem-org/gemffects/flash";
import { FlashTile } from "./FlashTile.tsx";
import "./flash-demo.css";
import "./flash-overrides.css";

type StyledFlashProps = {
  label: string;
};

export function StyledFlash({ label }: StyledFlashProps) {
  return (
    <FlashTile>
      <Flash origin="pointer" duration={600} intensity="lg" className="flash-shockwave">
        <span className="flash-demo__target">{label}</span>
      </Flash>
    </FlashTile>
  );
}
