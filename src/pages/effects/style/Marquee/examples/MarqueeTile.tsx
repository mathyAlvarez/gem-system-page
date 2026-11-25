import type { ReactNode } from "react";
import { MARQUEE_IMAGE_SRC, MARQUEE_LABELS } from "./demo.ts";
import "./marquee-demo.css";

type MarqueeTileProps = {
  label?: string;
  tall?: boolean;
  children: ReactNode;
};

/** Dark stage so the edge fade reads the same in both themes. */
export function MarqueeTile({ label, tall = false, children }: MarqueeTileProps) {
  return (
    <div className="marquee-demo__item">
      {label ? <p className="marquee-demo__label">{label}</p> : null}
      <div
        className={tall ? "marquee-demo__stage marquee-demo__stage--tall" : "marquee-demo__stage"}
      >
        {children}
      </div>
    </div>
  );
}

type MarqueeChipsProps = {
  labels?: readonly string[];
};

export function MarqueeChips({ labels = MARQUEE_LABELS }: MarqueeChipsProps) {
  return (
    <>
      {labels.map((label) => (
        <span key={label} className="marquee-demo__chip">
          {label}
        </span>
      ))}
    </>
  );
}

type MarqueeImagesProps = {
  count?: number;
};

export function MarqueeImages({ count = 4 }: MarqueeImagesProps) {
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <img key={index} className="marquee-demo__image" src={MARQUEE_IMAGE_SRC} alt="" />
      ))}
    </>
  );
}
