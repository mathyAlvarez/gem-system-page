import { GradientText } from "@gem-org/gemffects/gradient-text";
import { TEXT_VARIANTS } from "./demo.ts";
import { TextTile } from "./TextTile.tsx";
import "./gradient-text-demo.css";

export function VariantsGradientText() {
  return (
    <div className="gt-demo">
      {TEXT_VARIANTS.map((variant) => (
        <TextTile key={variant} label={`variant="${variant}"`}>
          <GradientText variant={variant}>
            <span className="gt-demo__copy">{variant}</span>
          </GradientText>
        </TextTile>
      ))}
    </div>
  );
}
