import { Unlock } from "@gem-org/gemffects/unlock";
import "./unlock-demo.css";

type AsChildUnlockProps = {
  kicker: string;
  title: string;
};

export function AsChildUnlock({ kicker, title }: AsChildUnlockProps) {
  return (
    <Unlock asChild direction="up" color="var(--gem-palette-secondary-700)">
      <article className="ul-demo__card ul-demo__host">
        <p className="ul-demo__kicker">{kicker}</p>
        <p className="ul-demo__title">{title}</p>
      </article>
    </Unlock>
  );
}
