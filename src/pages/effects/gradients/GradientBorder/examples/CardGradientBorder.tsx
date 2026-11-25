import { GradientBorder } from "@gem-org/gemffects/gradient-border";
import { BorderTile } from "./BorderTile.tsx";
import "./gradient-border-demo.css";

type CardGradientBorderProps = {
  kicker: string;
  title: string;
  body: string;
};

export function CardGradientBorder({ kicker, title, body }: CardGradientBorderProps) {
  return (
    <BorderTile>
      <GradientBorder thickness={1} duration={8000} className="gb-demo__card-host">
        <article className="gb-demo__card">
          <p className="gb-demo__kicker">{kicker}</p>
          <p className="gb-demo__title">{title}</p>
          <p className="gb-demo__body">{body}</p>
        </article>
      </GradientBorder>
    </BorderTile>
  );
}
