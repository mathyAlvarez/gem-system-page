import { useEffect, useEffectEvent, useRef, type MouseEvent, type PointerEvent } from "react";
import {
  ParticleLayer,
  useParticleField,
  type ParticleKind,
  type ParticleMotion,
  type ParticleRender,
} from "@gem-org/gemffects/particles";
import { prefersReducedMotion } from "@gem-org/gemffects/utils";
import { spawnBurst, spawnRain, type ParticleEmit } from "./demo.ts";
import "./particles-demo.css";

export type ParticleStageProps = {
  kind: ParticleKind;
  motion: ParticleMotion;
  /** Visible text; also the accessible name of the stage button. */
  hint: string;
  durationMs?: number;
  count?: number;
  isPaused?: boolean;
  emit?: ParticleEmit;
  renderParticle?: ParticleRender;
  wide?: boolean;
};

const ALWAYS_INTERVAL_MS = 160;

export function ParticleStage({
  kind,
  motion,
  hint,
  durationMs = 900,
  count = 16,
  isPaused = false,
  emit = "click",
  renderParticle,
  wide = false,
}: ParticleStageProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(0);
  const { particles, spawn } = useParticleField({ maxLive: 80 });

  const fire = (originX: number, originY: number) => {
    const stage = stageRef.current;
    if (!stage || isPaused || prefersReducedMotion()) return;
    const spawned =
      motion === "rain"
        ? spawnRain(stage.clientWidth, stage.clientHeight, count, kind, nextId)
        : spawnBurst(originX, originY, count, kind, nextId);
    spawn(spawned, durationMs + 80);
  };

  const fireFromCenter = () => {
    const stage = stageRef.current;
    if (stage) fire(stage.clientWidth / 2, stage.clientHeight / 2);
  };

  const onTick = useEffectEvent(fireFromCenter);

  useEffect(() => {
    if (emit !== "always") return;
    onTick();
    const id = window.setInterval(onTick, ALWAYS_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [emit]);

  const onPointerDown = (event: PointerEvent<HTMLButtonElement>) => {
    if (event.button !== 0) return;
    const rect = event.currentTarget.getBoundingClientRect();
    fire(event.clientX - rect.left, event.clientY - rect.top);
  };

  // `detail === 0` means Enter/Space: emit from the center for keyboard users.
  const onClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.detail === 0) fireFromCenter();
  };

  const className = [
    "particles-demo__stage",
    wide && "particles-demo__stage--wide",
    motion === "rain" && "particles-demo__stage--clip",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={stageRef} className={className}>
      {emit === "click" ? (
        <button
          type="button"
          className="particles-demo__hit"
          onPointerDown={onPointerDown}
          onClick={onClick}
        >
          {hint}
        </button>
      ) : (
        <span className="particles-demo__hint">{hint}</span>
      )}
      <ParticleLayer
        particles={particles}
        motion={motion}
        isPaused={isPaused}
        durationMs={durationMs}
        renderParticle={renderParticle}
      />
    </div>
  );
}
