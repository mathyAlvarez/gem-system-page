import { useState } from "react";
import { ScrambleText } from "@gem-org/gemffects/scramble-text";
import { ScrambleTile } from "./ScrambleTile.tsx";
import "./scramble-text-demo.css";

type CallbacksScrambleTextProps = {
  text: string;
  empty: string;
};

export function CallbacksScrambleText({ text, empty }: CallbacksScrambleTextProps) {
  const [log, setLog] = useState<string[]>([]);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 4));

  return (
    <>
      <ScrambleTile>
        <ScrambleText
          trigger="click"
          variant="loop"
          text={text}
          className="scramble-demo__copy scramble-demo__copy--sm"
          onScrambleText={(event) => push(`onScrambleText · ${event.reason}`)}
          outScrambleText={(event) => push(`outScrambleText · ${event.reason}`)}
        />
      </ScrambleTile>
      <ul className="scramble-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </>
  );
}
