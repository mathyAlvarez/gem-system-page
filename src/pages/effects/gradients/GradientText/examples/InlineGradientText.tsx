import { GradientText } from "@gem-org/gemffects/gradient-text";
import { TextTile } from "./TextTile.tsx";
import "./gradient-text-demo.css";

type InlineGradientTextProps = {
  before: string;
  highlight: string;
  after: string;
};

/** The root is a `span`, so it can go inside a `<p>`. */
export function InlineGradientText({ before, highlight, after }: InlineGradientTextProps) {
  return (
    <TextTile>
      <p className="gt-demo__paragraph">
        {before} <GradientText className="gt-demo__inline">{highlight}</GradientText> {after}
      </p>
    </TextTile>
  );
}
