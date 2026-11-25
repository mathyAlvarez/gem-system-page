import { Marquee } from "@gem-org/gemffects/marquee";
import { MarqueeChips, MarqueeTile } from "./MarqueeTile.tsx";
import "./marquee-demo.css";

export function IntensityMarquee() {
  return (
    <div className="marquee-demo">
      {(["sm", "md", "lg"] as const).map((intensity) => (
        <MarqueeTile key={intensity} label={`intensity="${intensity}"`}>
          <Marquee intensity={intensity} className="marquee-demo__host">
            <MarqueeChips />
          </Marquee>
        </MarqueeTile>
      ))}
    </div>
  );
}
