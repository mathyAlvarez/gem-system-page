import { Marquee } from "@gem-org/gemffects/marquee";
import { MarqueeImages, MarqueeTile } from "./MarqueeTile.tsx";
import "./marquee-demo.css";

export function VerticalMarquee() {
  return (
    <div className="marquee-demo marquee-demo--row">
      {(["up", "down"] as const).map((variant) => (
        <MarqueeTile key={variant} label={`variant="${variant}"`} tall>
          <Marquee variant={variant} size={220} className="marquee-demo__host">
            <MarqueeImages />
          </Marquee>
        </MarqueeTile>
      ))}
    </div>
  );
}
