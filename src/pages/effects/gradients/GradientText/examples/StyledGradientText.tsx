import { GradientText } from "@gem-org/gemffects/gradient-text";
import { TextTile } from "./TextTile.tsx";
import "./gradient-text-demo.css";
import "./gradient-text-overrides.css";

type StyledGradientTextProps = {
  label: string;
};

export function StyledGradientText({ label }: StyledGradientTextProps) {
  return (
    <TextTile>
      <GradientText duration={4000} intensity="lg" className="gt-chrome">
        <span className="gt-demo__heading">{label}</span>
      </GradientText>
    </TextTile>
  );
}
