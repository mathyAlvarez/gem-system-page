import { Marquee } from "@gem-org/gemffects/marquee";
import { MarqueeImages, MarqueeTile } from "./MarqueeTile.tsx";
import "./marquee-demo.css";

export function TailwindMarquee() {
  return (
    <MarqueeTile tall>
      <Marquee
        variant="up"
        fade={false}
        className="mx-auto w-[9rem] rounded-[var(--gem-radius-xl)] bg-[var(--gem-palette-neutral-900)] [--gemfx-marquee-height:15rem]"
        classNames={{ track: "[&_img]:grayscale" }}
      >
        <MarqueeImages />
      </Marquee>
    </MarqueeTile>
  );
}
