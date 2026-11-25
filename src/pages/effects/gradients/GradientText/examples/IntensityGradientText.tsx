import { GradientText } from "@gem-org/gemffects/gradient-text";
import { TextTile } from "./TextTile.tsx";
import "./gradient-text-demo.css";

export function IntensityGradientText() {
  return (
    <div className="gt-demo">
      {(["flow", "pulse"] as const).map((variant) =>
        (["sm", "md", "lg"] as const).map((intensity) => (
          <TextTile
            key={`${variant}-${intensity}`}
            label={`variant="${variant}" intensity="${intensity}"`}
          >
            <GradientText variant={variant} intensity={intensity}>
              <span className="gt-demo__copy">{intensity}</span>
            </GradientText>
          </TextTile>
        )),
      )}
    </div>
  );
}
