import { Marquee } from "@gem-org/gemffects/marquee";
import { MARQUEE_LABELS } from "./demo.ts";
import { MarqueeTile } from "./MarqueeTile.tsx";
import "./marquee-demo.css";

type AsChildMarqueeProps = {
  label: string;
};

export function AsChildMarquee({ label }: AsChildMarqueeProps) {
  return (
    <MarqueeTile>
      <Marquee asChild classNames={{ surface: "marquee-demo__chip" }}>
        <ul aria-label={label} className="marquee-demo__host marquee-demo__list">
          {MARQUEE_LABELS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Marquee>
    </MarqueeTile>
  );
}
