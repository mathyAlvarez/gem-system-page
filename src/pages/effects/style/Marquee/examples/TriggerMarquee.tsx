import { Marquee } from "@gem-org/gemffects/marquee";
import { MarqueeChips, MarqueeTile } from "./MarqueeTile.tsx";
import "./marquee-demo.css";

type TriggerMarqueeProps = {
  hoverLabel: string;
  clickLabel: string;
};

export function TriggerMarquee({ hoverLabel, clickLabel }: TriggerMarqueeProps) {
  return (
    <div className="marquee-demo">
      <MarqueeTile label={hoverLabel}>
        <Marquee trigger="hover" className="marquee-demo__host">
          <MarqueeChips />
        </Marquee>
      </MarqueeTile>
      <MarqueeTile label={clickLabel}>
        <Marquee trigger="click" className="marquee-demo__host">
          <MarqueeChips />
        </Marquee>
      </MarqueeTile>
    </div>
  );
}
