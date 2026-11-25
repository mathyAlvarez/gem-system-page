import { GradientGlossy } from "@gem-org/gemffects/gradient-glossy";
import { GlossyTile } from "./GlossyTile.tsx";
import "./gradient-glossy-demo.css";

type CardGradientGlossyProps = {
  kicker: string;
  title: string;
  body: string;
};

export function CardGradientGlossy({ kicker, title, body }: CardGradientGlossyProps) {
  return (
    <GlossyTile>
      <GradientGlossy
        variant="soft"
        color="var(--gem-palette-secondary-500)"
        className="gg-demo__card-host"
      >
        <article className="gg-demo__card">
          <p className="gg-demo__kicker">{kicker}</p>
          <h3 className="gg-demo__title">{title}</h3>
          <p className="gg-demo__body">{body}</p>
        </article>
      </GradientGlossy>
    </GlossyTile>
  );
}
