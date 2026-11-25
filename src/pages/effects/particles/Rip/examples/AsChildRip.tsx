import { Rip } from "@gem-org/gemffects/rip";
import "./rip-demo.css";

type AsChildRipProps = {
  kicker: string;
  title: string;
};

export function AsChildRip({ kicker, title }: AsChildRipProps) {
  return (
    <div className="rp-demo__stage">
      <Rip asChild variant="tear" trigger="click">
        <article className="rp-demo__target">
          <p className="rp-demo__kicker">{kicker}</p>
          <p className="rp-demo__title">{title}</p>
        </article>
      </Rip>
    </div>
  );
}
