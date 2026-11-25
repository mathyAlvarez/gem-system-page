import { GradientText } from "@gem-org/gemffects/gradient-text";
import { TextTile } from "./TextTile.tsx";
import "./gradient-text-demo.css";

type TriggerGradientTextProps = {
  hoverLabel: string;
  clickLabel: string;
};

export function TriggerGradientText({ hoverLabel, clickLabel }: TriggerGradientTextProps) {
  return (
    <div className="gt-demo">
      <TextTile label='trigger="hover"'>
        <GradientText trigger="hover">
          <span className="gt-demo__copy">{hoverLabel}</span>
        </GradientText>
      </TextTile>
      <TextTile label='trigger="click"'>
        <GradientText trigger="click">
          <span className="gt-demo__copy">{clickLabel}</span>
        </GradientText>
      </TextTile>
    </div>
  );
}
