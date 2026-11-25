import { Marquee } from "@gem-org/gemffects/marquee";
import { MarqueeChips, MarqueeTile } from "./MarqueeTile.tsx";
import "./marquee-demo.css";

export function DurationMarquee() {
  return (
    <div className="marquee-demo">
      {[8000, 18000, 32000].map((duration) => (
        <MarqueeTile key={duration} label={`duration={${duration}}`}>
          <Marquee duration={duration} className="marquee-demo__host">
            <MarqueeChips />
          </Marquee>
        </MarqueeTile>
      ))}
    </div>
  );
}
