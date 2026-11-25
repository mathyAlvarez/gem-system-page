import { GradientText } from "@gem-org/gemffects/gradient-text";
import { TextTile } from "./TextTile.tsx";
import "./gradient-text-demo.css";

type HeadingGradientTextProps = {
  title: string;
};

/** The root is a `span`: on a block heading, `asChild` keeps the `h2` as the root. */
export function HeadingGradientText({ title }: HeadingGradientTextProps) {
  return (
    <TextTile>
      <GradientText asChild duration={6000} intensity="lg">
        <h2 className="gt-demo__heading">{title}</h2>
      </GradientText>
    </TextTile>
  );
}
