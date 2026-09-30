import { useState } from "react";
import { Shine, Switch } from "@gem-org/gem-system";
import "./shine-demo.css";

type ControlShineProps = { active: string; paused: string };

export function ControlShine({ active, paused }: ControlShineProps) {
  const [isActive, setIsActive] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="shine-demo">
      <div className="shine-demo__row">
        <Switch label={active} checked={isActive} onChange={(event) => setIsActive(event.target.checked)} />
        <Switch label={paused} checked={isPaused} onChange={(event) => setIsPaused(event.target.checked)} />
      </div>
      <Shine isActive={isActive} isPaused={isPaused} intensity="lg" interval={0}>
        <span className="shine-tile" />
      </Shine>
    </div>
  );
}
