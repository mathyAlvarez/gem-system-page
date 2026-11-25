import { useState } from "react";
import { Switch } from "@gem-org/gem-system";
import { Marquee } from "@gem-org/gemffects/marquee";
import { MarqueeChips, MarqueeTile } from "./MarqueeTile.tsx";
import "./marquee-demo.css";

type StateMarqueeProps = {
  pausedLabel: string;
  disabledLabel: string;
};

export function StateMarquee({ pausedLabel, disabledLabel }: StateMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <div className="marquee-demo__controls">
        <Switch
          label={pausedLabel}
          checked={isPaused}
          onChange={(event) => setIsPaused(event.target.checked)}
        />
        <Switch
          label={disabledLabel}
          checked={isDisabled}
          onChange={(event) => setIsDisabled(event.target.checked)}
        />
      </div>
      <MarqueeTile>
        <Marquee isPaused={isPaused} isDisabled={isDisabled} className="marquee-demo__host">
          <MarqueeChips />
        </Marquee>
      </MarqueeTile>
    </>
  );
}
