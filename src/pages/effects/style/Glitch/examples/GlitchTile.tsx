import type { ReactNode } from "react";
import { GLITCH_IMAGE_SRC } from "./demo.ts";
import "./glitch-demo.css";

type GlitchTileProps = {
  label?: string;
  children: ReactNode;
};

/** Dark stage so the screen-blended tears read the same in both themes. */
export function GlitchTile({ label, children }: GlitchTileProps) {
  return (
    <div className="glitch-demo__item">
      {label ? <p className="glitch-demo__label">{label}</p> : null}
      <div className="glitch-demo__stage">{children}</div>
    </div>
  );
}

type GlitchImageProps = {
  alt?: string;
  compact?: boolean;
};

export function GlitchImage({ alt = "", compact = false }: GlitchImageProps) {
  return (
    <img
      className={compact ? "glitch-demo__image glitch-demo__image--compact" : "glitch-demo__image"}
      src={GLITCH_IMAGE_SRC}
      alt={alt}
    />
  );
}
