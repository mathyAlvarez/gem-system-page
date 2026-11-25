import type { ReactNode } from "react";
import { FOIL_IMAGE_SRC } from "./demo.ts";
import "./holofoil-demo.css";

type FoilTileProps = {
  label?: string;
  children: ReactNode;
};

/** Dark stage: the blend modes need a dark base to read the same in both themes. */
export function FoilTile({ label, children }: FoilTileProps) {
  return (
    <div className="foil-demo__item">
      {label ? <p className="foil-demo__label">{label}</p> : null}
      <div className="foil-demo__stage">{children}</div>
    </div>
  );
}

type FoilCardProps = {
  kicker?: string;
  title: string;
  compact?: boolean;
};

export function FoilCard({ kicker = "HoloFoil", title, compact = false }: FoilCardProps) {
  return (
    <div className={compact ? "foil-demo__card foil-demo__card--compact" : "foil-demo__card"}>
      <p className="foil-demo__kicker">{kicker}</p>
      <p className="foil-demo__title">{title}</p>
    </div>
  );
}

type FoilImageProps = {
  alt?: string;
  compact?: boolean;
};

export function FoilImage({ alt = "", compact = false }: FoilImageProps) {
  return (
    <img
      className={compact ? "foil-demo__image foil-demo__image--compact" : "foil-demo__image"}
      src={FOIL_IMAGE_SRC}
      alt={alt}
    />
  );
}
