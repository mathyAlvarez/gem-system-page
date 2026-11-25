import { Marquee } from "@gem-org/gemffects/marquee";
import { MarqueeChips, MarqueeTile } from "./MarqueeTile.tsx";
import "./marquee-demo.css";

export function PauseOnHoverMarquee() {
  return (
    <div className="marquee-demo">
      {[true, false].map((pauseOnHover) => (
        <MarqueeTile key={String(pauseOnHover)} label={`pauseOnHover={${pauseOnHover}}`}>
          <Marquee pauseOnHover={pauseOnHover} className="marquee-demo__host">
            <MarqueeChips />
          </Marquee>
        </MarqueeTile>
      ))}
    </div>
  );
}
