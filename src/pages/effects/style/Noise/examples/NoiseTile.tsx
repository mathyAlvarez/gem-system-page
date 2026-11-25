import type { ReactNode } from "react";
import { NOISE_IMAGE_SRC } from "./demo.ts";
import "./noise-demo.css";

type NoiseTileProps = {
  label?: string;
  children: ReactNode;
};

/** Neutral stage so the grain reads the same in both themes. */
export function NoiseTile({ label, children }: NoiseTileProps) {
  return (
    <div className="noise-demo__item">
      {label ? <p className="noise-demo__label">{label}</p> : null}
      <div className="noise-demo__stage">{children}</div>
    </div>
  );
}

type NoiseCardProps = {
  tone?: "gradient" | "dark" | "mid" | "light";
  compact?: boolean;
  children?: ReactNode;
};

export function NoiseCard({ tone = "gradient", compact = false, children }: NoiseCardProps) {
  return (
    <div
      className={`noise-demo__card noise-demo__card--${tone}${compact ? " noise-demo__card--compact" : ""}`}
    >
      {children}
    </div>
  );
}

type NoiseImageProps = {
  alt?: string;
};

export function NoiseImage({ alt = "" }: NoiseImageProps) {
  return <img className="noise-demo__image" src={NOISE_IMAGE_SRC} alt={alt} />;
}
