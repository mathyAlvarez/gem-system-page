import { Marquee } from "@gem-org/gemffects/marquee";
import { MarqueeChips, MarqueeTile } from "./MarqueeTile.tsx";
import "./marquee-demo.css";

export function GapSizeMarquee() {
  return (
    <div className="marquee-demo">
      <MarqueeTile label="gap={8}">
        <Marquee gap={8} className="marquee-demo__host">
          <MarqueeChips />
        </Marquee>
      </MarqueeTile>
      <MarqueeTile label='gap="3rem"'>
        <Marquee gap="3rem" className="marquee-demo__host">
          <MarqueeChips />
        </Marquee>
      </MarqueeTile>
      <MarqueeTile label="size={320}">
        <Marquee size={320} className="marquee-demo__host">
          <MarqueeChips />
        </Marquee>
      </MarqueeTile>
    </div>
  );
}
