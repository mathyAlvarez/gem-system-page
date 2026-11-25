import { Button } from "@gem-org/gem-system";
import { GradientText } from "@gem-org/gemffects/gradient-text";
import { TextTile } from "./TextTile.tsx";
import "./gradient-text-demo.css";

type AsChildGradientTextProps = {
  label: string;
  buttonLabel: string;
};

export function AsChildGradientText({ label, buttonLabel }: AsChildGradientTextProps) {
  return (
    <div className="gt-demo">
      <TextTile label="<h3>">
        <GradientText asChild>
          <h3 className="gt-demo__heading">{label}</h3>
        </GradientText>
      </TextTile>
      <TextTile label='<Button> + variant="pulse"'>
        <GradientText asChild variant="pulse" intensity="lg">
          <Button variant="neutral">{buttonLabel}</Button>
        </GradientText>
      </TextTile>
    </div>
  );
}
