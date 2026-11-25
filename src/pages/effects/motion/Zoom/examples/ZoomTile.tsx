import type { ReactNode } from "react";
import { ZOOM_IMAGE } from "./demo.ts";
import "./zoom-demo.css";

type ZoomTileProps = {
  label?: string;
  children: ReactNode;
};

/** Dark stage so the image edges read the same in light and dark themes. */
export function ZoomTile({ label, children }: ZoomTileProps) {
  return (
    <div className="zoom-demo__item">
      {label ? <p className="zoom-demo__label">{label}</p> : null}
      <div className="zoom-demo__stage">{children}</div>
    </div>
  );
}

type ZoomImageProps = {
  alt?: string;
  compact?: boolean;
};

export function ZoomImage({ alt = "", compact = false }: ZoomImageProps) {
  return (
    <img
      className={compact ? "zoom-demo__image zoom-demo__image--compact" : "zoom-demo__image"}
      src={ZOOM_IMAGE}
      alt={alt}
      draggable={false}
    />
  );
}
