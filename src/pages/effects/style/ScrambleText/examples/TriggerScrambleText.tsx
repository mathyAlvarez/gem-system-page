import { ScrambleText } from "@gem-org/gemffects/scramble-text";
import { ScrambleTile } from "./ScrambleTile.tsx";
import "./scramble-text-demo.css";

type TriggerScrambleTextProps = {
  hoverText: string;
  clickText: string;
};

export function TriggerScrambleText({ hoverText, clickText }: TriggerScrambleTextProps) {
  return (
    <div className="scramble-demo">
      <ScrambleTile label='trigger="hover"'>
        <ScrambleText
          trigger="hover"
          text={hoverText}
          className="scramble-demo__copy scramble-demo__copy--sm"
        />
      </ScrambleTile>
      <ScrambleTile label='trigger="click"'>
        <ScrambleText
          trigger="click"
          text={clickText}
          className="scramble-demo__copy scramble-demo__copy--sm"
        />
      </ScrambleTile>
    </div>
  );
}
