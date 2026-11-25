import { ScrambleText } from "@gem-org/gemffects/scramble-text";
import { ScrambleTile } from "./ScrambleTile.tsx";
import "./scramble-text-demo.css";

type AsChildScrambleTextProps = {
  label: string;
};

export function AsChildScrambleText({ label }: AsChildScrambleTextProps) {
  return (
    <ScrambleTile>
      <ScrambleText asChild trigger="hover">
        <button type="button" className="scramble-demo__button">
          {label}
        </button>
      </ScrambleText>
    </ScrambleTile>
  );
}
