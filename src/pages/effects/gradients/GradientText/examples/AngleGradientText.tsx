import { GradientText } from "@gem-org/gemffects/gradient-text";
import { TextTile } from "./TextTile.tsx";
import "./gradient-text-demo.css";

const ANGLES = [0, 90, 180, "to top right"] as const;

export function AngleGradientText() {
  return (
    <div className="gt-demo">
      {ANGLES.map((angle) => (
        <TextTile
          key={angle}
          label={typeof angle === "number" ? `angle={${angle}}` : `angle="${angle}"`}
        >
          <GradientText variant="static" angle={angle}>
            <span className="gt-demo__copy">Angle</span>
          </GradientText>
        </TextTile>
      ))}
    </div>
  );
}
