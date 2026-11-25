import type { ReactNode } from "react";
import { GLASS_SCENE_SRC } from "./demo.ts";
import "./glassmorphism-demo.css";

type GlassSceneProps = {
  label?: string;
  compact?: boolean;
  children: ReactNode;
};

/** Image backdrop so the blur has something to frost, in either theme. */
export function GlassScene({ label, compact = false, children }: GlassSceneProps) {
  return (
    <div className="glass-demo__item">
      {label ? <p className="glass-demo__label">{label}</p> : null}
      <div
        className={compact ? "glass-demo__scene glass-demo__scene--compact" : "glass-demo__scene"}
      >
        <img className="glass-demo__scene-image" src={GLASS_SCENE_SRC} alt="" />
        {children}
      </div>
    </div>
  );
}

type GlassCopyProps = {
  title: string;
  copy?: string;
};

export function GlassCopy({ title, copy }: GlassCopyProps) {
  return (
    <div className="glass-demo__target">
      <p className="glass-demo__title">{title}</p>
      {copy ? <p className="glass-demo__copy">{copy}</p> : null}
    </div>
  );
}
