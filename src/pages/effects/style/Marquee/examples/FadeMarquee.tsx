import { Marquee } from "@gem-org/gemffects/marquee";
import { MarqueeChips, MarqueeTile } from "./MarqueeTile.tsx";
import "./marquee-demo.css";

export function FadeMarquee() {
  return (
    <div className="marquee-demo">
      {[true, false].map((fade) => (
        <MarqueeTile key={String(fade)} label={`fade={${fade}}`}>
          <Marquee fade={fade} className="marquee-demo__host">
            <MarqueeChips />
          </Marquee>
        </MarqueeTile>
      ))}
    </div>
  );
}
