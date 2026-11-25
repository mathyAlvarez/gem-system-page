import { useState } from "react";
import { Button, Switch } from "@gem-org/gem-system";
import { Marquee } from "@gem-org/gemffects/marquee";
import { MarqueeChips, MarqueeTile } from "./MarqueeTile.tsx";
import "./marquee-demo.css";

type CallbacksMarqueeProps = {
  activeLabel: string;
  action: string;
  /** Uses `{count}` as the placeholder. */
  clicks: string;
  empty: string;
};

export function CallbacksMarquee({ activeLabel, action, clicks, empty }: CallbacksMarqueeProps) {
  const [isActive, setIsActive] = useState(true);
  const [log, setLog] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 4));

  return (
    <>
      <div className="marquee-demo__controls">
        <Switch
          label={activeLabel}
          checked={isActive}
          onChange={(event) => setIsActive(event.target.checked)}
        />
      </div>
      <MarqueeTile>
        <Marquee
          isActive={isActive}
          className="marquee-demo__host"
          onMarquee={(event) => push(`onMarquee · ${event.reason}`)}
          outMarquee={(event) => push(`outMarquee · ${event.reason}`)}
        >
          <Button size="sm" onClick={() => setCount((current) => current + 1)}>
            {action}
          </Button>
          <MarqueeChips />
        </Marquee>
      </MarqueeTile>
      <p className="marquee-demo__label" aria-live="polite">
        {clicks.replace("{count}", String(count))}
      </p>
      <ul className="marquee-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </>
  );
}
