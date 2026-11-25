import { GradientText } from "@gem-org/gemffects/gradient-text";
import { TextTile } from "./TextTile.tsx";
import "./gradient-text-demo.css";

type BaseGradientTextProps = {
  label: string;
};

export function BaseGradientText({ label }: BaseGradientTextProps) {
  return (
    <TextTile>
      <GradientText>
        <span className="gt-demo__copy">{label}</span>
      </GradientText>
    </TextTile>
  );
}
