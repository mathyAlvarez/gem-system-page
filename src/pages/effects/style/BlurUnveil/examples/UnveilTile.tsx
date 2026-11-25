import { useState, type ReactNode } from "react";
import { Button } from "@gem-org/gem-system";
import { UNVEIL_IMAGE } from "./demo.ts";
import "./blur-unveil-demo.css";

type UnveilTileProps = {
  label?: string;
  children: ReactNode;
};

/** Dark stage so the blur edges read the same in light and dark themes. */
export function UnveilTile({ label, children }: UnveilTileProps) {
  return (
    <div className="unveil-demo__item">
      {label ? <p className="unveil-demo__label">{label}</p> : null}
      <div className="unveil-demo__stage">{children}</div>
    </div>
  );
}

type UnveilImageProps = {
  alt?: string;
  compact?: boolean;
};

export function UnveilImage({ alt = "", compact = false }: UnveilImageProps) {
  return (
    <img
      className={compact ? "unveil-demo__image unveil-demo__image--compact" : "unveil-demo__image"}
      src={UNVEIL_IMAGE}
      alt={alt}
      draggable={false}
    />
  );
}

type ReplayProps = {
  label: string;
  /** Receives a key that changes on each replay; `trigger="always"` only plays on mount. */
  children: (replayKey: number) => ReactNode;
};

export function Replay({ label, children }: ReplayProps) {
  const [replayKey, setReplayKey] = useState(0);

  return (
    <div className="unveil-demo__stack">
      {children(replayKey)}
      <Button size="sm" variant="secondary" onClick={() => setReplayKey((current) => current + 1)}>
        {label}
      </Button>
    </div>
  );
}
