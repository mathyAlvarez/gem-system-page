import { Marquee } from "@gem-org/gemffects/marquee";
import { MarqueeChips, MarqueeTile } from "./MarqueeTile.tsx";
import "./marquee-demo.css";

export function BaseMarquee() {
  return (
    <MarqueeTile>
      <Marquee className="marquee-demo__host">
        <MarqueeChips />
      </Marquee>
    </MarqueeTile>
  );
}
