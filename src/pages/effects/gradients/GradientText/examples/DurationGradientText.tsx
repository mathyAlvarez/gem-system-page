import { GradientText } from "@gem-org/gemffects/gradient-text";
import { TextTile } from "./TextTile.tsx";
import "./gradient-text-demo.css";

export function DurationGradientText() {
  return (
    <div className="gt-demo">
      {[1600, 3200, 5600].map((duration) => (
        <TextTile key={duration} label={`duration={${duration}}`}>
          <GradientText duration={duration}>
            <span className="gt-demo__copy">{duration}ms</span>
          </GradientText>
        </TextTile>
      ))}
    </div>
  );
}
