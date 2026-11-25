import { ScrambleText } from "@gem-org/gemffects/scramble-text";
import { ScrambleTile } from "./ScrambleTile.tsx";
import "./scramble-text-demo.css";
import "./scramble-text-overrides.css";

type StyledScrambleTextProps = {
  text: string;
};

export function StyledScrambleText({ text }: StyledScrambleTextProps) {
  return (
    <ScrambleTile>
      <ScrambleText
        variant="loop"
        charset="01"
        hold={1800}
        text={text}
        className="scramble-terminal"
      />
    </ScrambleTile>
  );
}
