import { Flash, type FlashVariant } from "@gem-org/gemffects/flash";
import { FlashTile } from "./FlashTile.tsx";
import "./flash-demo.css";

type VariantsFlashProps = {
  hint: string;
};

const variants: FlashVariant[] = ["burst", "wash", "bloom"];

export function VariantsFlash({ hint }: VariantsFlashProps) {
  return (
    <div className="flash-demo">
      {variants.map((variant) => (
        <FlashTile key={variant} label={`variant="${variant}"`}>
          <Flash variant={variant} asChild className="flash-demo__host">
            <button type="button" className="flash-demo__target">
              {hint}
            </button>
          </Flash>
        </FlashTile>
      ))}
    </div>
  );
}
