import { Marquee } from "@gem-org/gemffects/marquee";
import { MarqueeChips, MarqueeTile } from "./MarqueeTile.tsx";
import "./marquee-demo.css";

export function DirectionsMarquee() {
  return (
    <div className="marquee-demo">
      {(["left", "right"] as const).map((variant) => (
        <MarqueeTile key={variant} label={`variant="${variant}"`}>
          <Marquee variant={variant} className="marquee-demo__host">
            <MarqueeChips />
          </Marquee>
        </MarqueeTile>
      ))}
    </div>
  );
}
