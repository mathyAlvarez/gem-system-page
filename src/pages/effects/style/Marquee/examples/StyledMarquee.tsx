import { Marquee } from "@gem-org/gemffects/marquee";
import { MARQUEE_LABELS } from "./demo.ts";
import { MarqueeTile } from "./MarqueeTile.tsx";
import "./marquee-demo.css";
import "./marquee-overrides.css";

export function StyledMarquee() {
  return (
    <MarqueeTile>
      <Marquee className="marquee-ribbon">
        {MARQUEE_LABELS.map((label) => (
          <span key={label} className="marquee-demo__word">
            {label}
          </span>
        ))}
      </Marquee>
    </MarqueeTile>
  );
}
